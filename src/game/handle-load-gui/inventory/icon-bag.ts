import { app } from '@game/app'
import { Sprite } from 'pixi.js'

const iconBag = (sprite: Sprite) => {
  sprite.anchor.set(0.5, 0.5)

  sprite.x = window.innerWidth - sprite.width / 2 - 46
  sprite.y = window.innerHeight - sprite.height

  // Opt-in to interactivity
  sprite.eventMode = 'static'

  // Shows hand cursor
  sprite.cursor = 'pointer'

  const inventoryContainer = app.getContainer('inventory')

  const onClick = () => {
    app.state.isBagOpen = !app.state.isBagOpen

    inventoryContainer.visible = app.state.isBagOpen
  }

  // Pointers normalize touch and mouse (good for mobile and desktop)
  sprite.on('pointerdown', onClick)

  const container = app.getContainer('ui')
  container.addChild(sprite)
}

export default iconBag
