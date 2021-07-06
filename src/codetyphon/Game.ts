import { GameConf } from "./interface";
import Scene from "./Scene";
export default class Game {
  height: number;
  width: number;
  scene: Scene;
  constructor(conf: GameConf) {
    this.width = conf.width;
    this.height = conf.height;
  }
  lanch(scene: Scene) {
    scene.setSize(this.width, this.height);
    this.scene = scene;
  }
  setup() {
    return (p5, canvasParentRef) => {
      p5.createCanvas(this.width, this.height).parent(canvasParentRef);
      this.scene.gameObjects.forEach((go) => {
        go.components.forEach((c) => c.setup(p5));
      });
    };
  }
  draw() {
    return (p5) => {
      p5.clear();
      this.scene.gameObjects.forEach((go) => {
        go.systems.forEach((sys) => sys.exec(p5));
      });
    };
  }
}
