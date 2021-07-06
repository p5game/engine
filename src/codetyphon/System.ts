import GameObject from "./GameObject";

export default class System {
  name: string;
  GameObject: GameObject;
  constructor(name: string) {
    this.name = name;
  }
  exec(p5) {}
}
