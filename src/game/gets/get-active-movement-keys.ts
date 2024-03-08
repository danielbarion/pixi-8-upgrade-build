import { app } from '@game/app'

export const getActiveMovementKeys = () => {
  let activeKeys = ''

  if (app.controls.keys.W) {
    activeKeys += 'W'
  }

  if (app.controls.keys.A) {
    activeKeys += 'A'
  }

  if (app.controls.keys.S) {
    activeKeys += 'S'
  }

  if (app.controls.keys.D) {
    activeKeys += 'D'
  }

  return activeKeys
}

export default getActiveMovementKeys
