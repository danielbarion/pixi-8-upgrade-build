import { app } from '@game/app'
import { Sprite, Text } from 'pixi.js'

const backgroundNameCenter = (sprite: Sprite) => {
  sprite.anchor.set(0.5, 0)

  sprite.x = app.screen.width / 2
  sprite.y = -1

  const target = new Text('', {
    fontFamily: 'Arial',
    fontSize: 24,
    fill: 0xffffff,
  })

  target.anchor.set(0.5, 0.5)
  target.x = 0
  target.y = sprite.height / 2 - 1 // @TODO: need to review this position
  target.name = 'targetName'

  sprite.alpha = 0

  sprite.addChild(target)

  app.currentTargetInstance = sprite
  app.currentTargetTextInstance = target

  const container = app.getContainer('ui')
  container.addChild(sprite)
}

export default backgroundNameCenter
