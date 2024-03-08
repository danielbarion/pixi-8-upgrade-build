import { app } from '@game/app'

const initializeControls = async () => {
  window.addEventListener('keydown', app.keysDown)
  window.addEventListener('keyup', app.keysUp)
}

export default initializeControls
