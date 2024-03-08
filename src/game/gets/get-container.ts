import { app } from '@game/app'

const getContainer = (name: string) => {
  return app.containers.get(name)
}
export default getContainer
