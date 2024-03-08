import { app } from '@game/app'

const initialize = async () => {
  await app.init({
    view: document.createElement('canvas'),
  })

  document.body.appendChild(app.canvas as Node)
}

initialize()
