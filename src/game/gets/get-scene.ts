import { app } from '@game/app'

const getScene = (name: string) => {
  return app.scenes.get(name)
}
export default getScene
