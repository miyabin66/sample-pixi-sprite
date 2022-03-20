import { Application } from 'pixi.js'

type Props = {
  canvas: HTMLCanvasElement
}

class SpriteClass {
  app: Application

  constructor({ canvas }: Props) {
    const {
      Application,
      AnimatedSprite,
    } = require('pixi.js')

    // Application作成
    this.app = new Application({
      width: 375,
      height: 375,
      view: canvas,
      resolution: window.devicePixelRatio || 1,
      backgroundColor: 0xffffff,
    })

    this.app.loader.add('penguin', '/spritesheet.json').load(() => {
      if (!this.app.loader.resources.penguin.textures) return

      const penguinTextures = this.app.loader.resources.penguin.textures
      const penguinTextureArray = Object.keys(penguinTextures).map(
        (e) => penguinTextures[e]
      )

      const penguinSprite = new AnimatedSprite(penguinTextureArray)
      penguinSprite.position.set(
        375 / 2,
        375 / 2
      )
      penguinSprite.scale.set(5)
      penguinSprite.anchor.set(0.5)
      penguinSprite.animationSpeed = 0.03
      penguinSprite.loop = true
      this.app.stage.addChild(penguinSprite)

      penguinSprite.play()
    })
  }
}

export default SpriteClass
