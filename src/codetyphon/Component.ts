export default class Component {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  setData(key: string, value: any) {
    this[key] = value;
  }
  getDate(key: string) {
    return this[key];
  }
  setup(p5) {}
}
