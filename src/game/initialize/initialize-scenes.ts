import { app } from '@game/app'
import { Container } from 'pixi.js'
import { scenes } from '@config'

const initializeScenes = async () => {
  let sceneContainer = null

  // @todo: check if this is async, maybe I need to use `for await` instead of `forEach`
  scenes.forEach((scene) => {
    sceneContainer = new Container()
    sceneContainer.name = scene.name
    sceneContainer.zIndex = scene.zIndex
    sceneContainer.visible = scene.visible
    sceneContainer.sortableChildren = true

    // save scene into the `scenes` state
    app.scenes.set(scene.name, sceneContainer)
    // add scene into the stage
    app.stage.addChild(sceneContainer)
  })
}

export default initializeScenes
