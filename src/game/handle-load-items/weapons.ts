import { app } from '@game/app'
import { Sprite } from 'pixi.js'

const weapons = (sprite: Sprite) => {
  sprite.anchor.set(0.5, 0.5)

  // Opt-in to interactivity
  sprite.eventMode = 'static'

  // Shows hand cursor
  sprite.cursor = 'pointer'

  const onClick = () => {
    console.log('clicked on: ', sprite.name)
  }

  // Pointers normalize touch and mouse (good for mobile and desktop)
  sprite.on('pointerdown', onClick)
}

export default weapons
