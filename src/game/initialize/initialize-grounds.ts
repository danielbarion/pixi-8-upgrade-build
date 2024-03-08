import { CompositeTilemap } from '@pixi/tilemap'
import { app } from '@game/app'

const initializeGrounds = async (currentMap?: any) => {
  if (!currentMap) {
    console.error('No map was given to be rendered on ground')

    return
  }

  const tilemap = new CompositeTilemap()

  const tileSize = 48

  const fileNamePath = (file: string) => `${file}.png`

  for (let column = 0; column < currentMap.length; column++) {
    for (let row = 0; row < currentMap[column].length; row++) {
      if (typeof currentMap[column][row] === 'string') {
        tilemap.tile(fileNamePath(currentMap[column][row]), column * tileSize, row * tileSize)
      }

      if (Array.isArray(currentMap[column][row])) {
        currentMap[column][row].forEach((tileItem: any) => {
          tilemap.tile(fileNamePath(tileItem), column * tileSize, row * tileSize)
        })
      }
    }
  }

  tilemap.name = 'ground'

  const container = app.getContainer('ground')

  container.addChild(tilemap)
}

export default initializeGrounds
