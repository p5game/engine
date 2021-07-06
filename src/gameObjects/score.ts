import GameObject from "../codetyphon/GameObject";
import { Postion, Size } from "../codetyphon/interface";
import TextComponent from "../codetyphon/components/textComponent";

const size: Size = {
  width: 72,
  height: 72
};
const postion: Postion = {
  x: 10,
  y: 50
};
const velocity: Postion = {
  x: 1,
  y: 1
};

const score = new GameObject("score", size, postion, velocity);

score.addComponent(new TextComponent("score", ""));

export default score;
