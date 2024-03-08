import { app } from '@game/app'
import { Sprite } from 'pixi.js'

const backgroundAvatar = (sprite: Sprite) => {
  sprite.x = 0
  sprite.y = 3

  if (!app.activeCharacter) {
    return
  }

  const avatar = app.activeCharacter.avatar

  avatar.anchor.set(0.5, 0.5)

  avatar.scale.x = -1

  avatar.x = sprite.width / 2
  avatar.y = sprite.height / 2.3

  avatar.width = sprite.width / 1.7
  avatar.height = sprite.height / 1.7

  sprite.addChild(avatar)

  sprite.alpha = 1

  const container = app.getContainer('ui')
  container.addChild(sprite)
}

export default backgroundAvatar
