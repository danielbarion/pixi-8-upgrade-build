import { app } from '@game/app'
import { Assets, Sprite, Texture } from 'pixi.js'

const initializeUi = async () => {
  const gameUi = await Assets.loadBundle('game_ui')

  Object.keys(gameUi).forEach((item) => {
    const loadedAssetTexture: Texture = gameUi[item]

    const uiSprite = new Sprite(loadedAssetTexture)
    uiSprite.name = item

    const GUImethod = app.handleLoadGUI()[item]

    if (GUImethod) {
      GUImethod(uiSprite)
    }
  })
}

export default initializeUi
