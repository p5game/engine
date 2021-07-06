import { Image } from "p5";
import Component from "../Component";
// import GameObject from "../GameObject";

export default class ImageComponent extends Component {
  name: string;
  src: string;
  img: Image;
  constructor(src: string) {
    super("image");
    this.src = src;
  }
  setup(p5) {
    this.img = p5.loadImage(this.src);
  }
}
