import GameObject from "./GameObject";

export default class Scene {
  height: number;
  width: number;
  gameObjects: GameObject[];
  name: string;

  constructor(name: string) {
    this.name = name;
    this.gameObjects = [];
  }
  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  addGameObject(gameObject: GameObject) {
    gameObject.scene = this;
    this.gameObjects.push(gameObject);
  }
}
