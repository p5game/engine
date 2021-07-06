import Component from "./Component";
import Body from "./components/Body";
import { Postion, Size } from "./interface";
import Scene from "./Scene";
import System from "./System";
export default class GameObject {
  name: string;
  components: Component[];
  systems: System[];
  scene: Scene;
  constructor(name: string, size: Size, postion: Postion, velocity: Postion) {
    this.name = name;
    this.components = [];
    this.systems = [];
    // default load bodyComponent
    this.addComponent(new Body(size, postion, velocity));
  }
  addComponent(component: Component) {
    this.components.push(component);
  }
  getComponent(name: string) {
    const arr = this.components.filter((co) => {
      return co.name === name;
    });
    return arr[0];
  }
  removeComponent(name: string) {
    this.components.forEach((component, index, arr) => {
      if (component.name === name) {
        arr.splice(index, 1);
      }
    });
  }
  addSystem(system: System) {
    system.GameObject = this;
    this.systems.push(system);
  }
}
