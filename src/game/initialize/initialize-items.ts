import { app } from '@game/app'
import { Assets, Sprite, Texture } from 'pixi.js'
import { tempDatabase } from '@config'

const initializeItems = async () => {
  const books = await Assets.loadBundle('books') // @TODO: this should be items
  const weapons = await Assets.loadBundle('weapons') // @TODO: this should be items

  const itemsArray = [books, weapons]

  const itemsDatabase = tempDatabase.items

  itemsArray.forEach((items) => {
    Object.keys(items).forEach((item) => {
      const loadedAssetTexture: Texture = items[item]

      const itemSprite = new Sprite(loadedAssetTexture)
      itemSprite.name = item

      const itemFromDatabase = itemsDatabase.find((item) => item.icon === itemSprite.name)

      const fullItemData = {
        ...itemFromDatabase,
        sprite: itemSprite,
      }

      console.log('FULL ITEM DATA: ', fullItemData)

      /**
       * load all items and save them into the memory
       */
      if (fullItemData?.id) {
        app.items[fullItemData.id] = fullItemData
      }

      // @TODO: need to rename this "app.items"
      const itemsMethod = app.handleLoadItems()[item]

      if (itemsMethod) {
        itemsMethod(itemSprite)
      }
    })
  })
}

export default initializeItems
