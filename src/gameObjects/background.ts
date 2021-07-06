import GameObject from "../codetyphon/GameObject";
import { Postion, Size } from "../codetyphon/interface";
import BackgroundColorComponent from "../codetyphon/components/BackGroundColor";
import drawBgSystem from "../systems/drawbg";

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

const background = new GameObject("background", size, postion, velocity);

background.addComponent(new BackgroundColorComponent("bg", 10));

background.addSystem(drawBgSystem);

export default background;
