import { app } from '@game/app'
import { Container } from 'pixi.js'
import { containers } from '@config'
import getScene from '../gets/get-scene'

interface IChildrens {
  name: string
  zIndex: number
  childrens?: IChildrens[]
}

const createChildrenContainer = (
  parentContainer: Container | null,
  childrenContainerStructure: IChildrens,
) => {
  const containerInstance = new Container()
  containerInstance.name = childrenContainerStructure.name
  containerInstance.zIndex = childrenContainerStructure.zIndex
  containerInstance.sortableChildren = true

  app.containers.set(childrenContainerStructure.name, containerInstance)
  parentContainer?.addChild(containerInstance)

  if (childrenContainerStructure.childrens?.length) {
    childrenContainerStructure.childrens.forEach((childrenContainer) => {
      createChildrenContainer(containerInstance, childrenContainer)
    })
  }
}

/**
 * Containers must belog to some `scene`
 */
const initializeContainers = async () => {
  let containerInstance: Container | null = null
  let parentScene = null

  containers.forEach((container) => {
    containerInstance = new Container()
    containerInstance.name = container.name
    containerInstance.zIndex = container.zIndex
    containerInstance.sortableChildren = true

    app.containers.set(container.name, containerInstance)

    if (container.childrens?.length) {
      container.childrens.forEach((childrenContainer) => {
        createChildrenContainer(containerInstance, childrenContainer)
      })
    }

    parentScene = getScene(container.parentScene)

    parentScene?.addChild(containerInstance)
  })
}

export default initializeContainers
