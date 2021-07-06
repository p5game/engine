import Component from "../Component";
import { Postion, Size } from "../interface";
export default class Body extends Component {
  name: string;
  postion: Postion;
  velocity: Postion;
  size: Size;
  constructor(size: Size, postion: Postion, velocity: Postion) {
    super("body");
    this.size = size;
    this.postion = postion;
    this.velocity = velocity;
  }
}
