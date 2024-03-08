import { app } from '@game/app'
import { Assets, Sprite, Texture } from 'pixi.js'

const initializeInventory = async () => {
  const items = await Assets.loadBundle('books') // @TODO: this should be items

  Object.keys(items).forEach((item) => {
    const loadedAssetTexture: Texture = items[item]

    const itemSprite = new Sprite(loadedAssetTexture)
    itemSprite.name = item

    /**
     * load all items and save them into the memory
     */
    app.items[item] = {
      name: item,
      sprite: itemSprite,
    }

    // @TODO: need to rename this "app.items"
    const itemsMethod = app.handleLoadItems()[item]

    if (itemsMethod) {
      itemsMethod(itemSprite)
    }
  })
}

export default initializeInventory
