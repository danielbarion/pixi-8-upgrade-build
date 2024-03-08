import { Application, Container, Renderer, Sprite, Text } from 'pixi.js'

class Game extends Application<Renderer<HTMLCanvasElement>> {
  width: number
  height: number
  backgroundColor: number
  resolution: number
  antialias: boolean
  autoDensity: boolean
  properties: { resolutionX: any; resolutionY: any; ground: { tileSize: number } }
  containers: Map<string | number, Container>
  scenes: Map<string | number, Container>
  activeCharacter: any
  currentTarget: any
  currentTargetInstance: null | Sprite
  currentTargetTextInstance: null | Text
  getActiveMovementKeys!: () => string
  getContainer!: (name: string) => Container
  getScene!: (name: string) => Container
  // @TODO: create interface and share between props definition
  initializeCharacter!: ({ name }: { name?: string }) => Promise<void>
  initializeContainers!: () => Promise<void>
  initializeControls!: () => Promise<void>
  initializeGrounds!: (map?: any) => Promise<void>
  moveControls!: () => void
  gameLoop!: () => void
  keysDown!: (event: any) => void
  keysUp!: (event: any) => void
  updateTarget!: () => void
  initializeUI!: () => Promise<void>
  initializeLogin!: () => Promise<void>
  initializeScenes!: () => Promise<void>
  initializeObservers!: () => Promise<void>
  initializeItems!: () => Promise<void>
  initializeInventory!: () => Promise<void>
  handleLoadGUI!: () => { [key: string]: (sprite: Sprite) => void }
  handleLoadItems!: () => { [key: string]: (sprite: Sprite) => void }
  currentMapName?: string
  items: any
  state: any // @TODO: fix this any

  /**
   * Explicity declaring those props as any to allow
   * us to add and bind our methods later on `game.ts`
   */
  prototype: any
  _plugins: any

  constructor({
    width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight,
    backgroundColor = 0x1099bb,
    resolution = window.devicePixelRatio || 1,
    antialias = false,
    autoDensity = false,
  } = {}) {
    super({ width, height, backgroundColor, resolution, antialias, autoDensity })

    this.width = width
    this.height = height

    /**
     * @Canvas view attributes
     */
    this.canvas.width = this.width
    this.canvas.height = this.height

    this.backgroundColor = backgroundColor
    this.resolution = resolution
    this.antialias = antialias
    this.autoDensity = autoDensity

    this.stage.sortableChildren = true

    /**
     * TODO: review if this is really needed
     */
    this.properties = {
      resolutionX: this.width,
      resolutionY: this.height,

      ground: {
        tileSize: 48, // size of one ground tile
      },
    }

    this.resizeTo = window

    this.containers = new Map()
    this.scenes = new Map()

    this.activeCharacter = null

    this.currentTarget = null
    this.currentTargetInstance = null
    this.currentTargetTextInstance = null

    this.currentMapName = ''

    /**
     * Load all items and store in this object into the memory
     */
    this.items = {}

    /**
     * States
     * Note: today this is only for state control and doesn't reflect on anything
     */
    this.state = {
      isBagOpen: false,
    }
  }
}

export default Game
