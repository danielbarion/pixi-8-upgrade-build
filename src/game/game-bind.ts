import Game from '@game/game-class'
import getActiveMovementKeys from '@game/gets/get-active-movement-keys'
import getContainer from '@game/gets/get-container'
import getScene from '@game/gets/get-scene'
import handleLoadGUI from '@game/handle-load-gui'
import handleLoadItems from '@game/handle-load-items'
import initializeContainers from '@game/initialize/initialize-containers'
import initializeControls from '@game/initialize/initialize-controls'
import initializeGrounds from '@game/initialize/initialize-grounds'
import initializeUI from '@game/initialize/initialize-ui'
import initializeScenes from '@game/initialize/initialize-scenes'
import initializeItems from '@game/initialize/initialize-items'
import initializeInventory from '@game/initialize/initialize-inventory'

const gameMethods = {
  getActiveMovementKeys,
  getContainer,
  getScene,
  handleLoadGUI,
  handleLoadItems,
  initializeContainers,
  initializeControls,
  initializeGrounds,
  initializeUI,
  initializeItems,
  initializeInventory,
  initializeScenes,
}

/**
 * Dynamicly bind to game method instead of:
 * Game.prototype.initializeUI = initializeUI
 */
Object.keys(gameMethods).forEach((item) => {
  Game.prototype[item as keyof typeof Game] = gameMethods[item as keyof typeof gameMethods]
})

export default Game
