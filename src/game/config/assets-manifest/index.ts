import items from './items'
import characterFaces from './character-faces'
import characters from './characters'
import gameUI from './game-ui'
import map from './map'

import type { AssetsBundle, AssetsManifest } from 'pixi.js'

const importedBundles = [map, characters, characterFaces, gameUI, items]

const bundles = importedBundles.reduce(
  (acc: AssetsBundle[], bundle: AssetsBundle | AssetsBundle[]) => {
    if (Array.isArray(bundle)) {
      bundle.forEach((deepBundle) => {
        acc.push(deepBundle)
      })
    } else {
      acc.push(bundle)
    }

    return acc
  },
  [],
)

export const manifest: AssetsManifest = {
  bundles,
}
