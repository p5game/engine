import GameObject from "../codetyphon/GameObject";
import { Postion, Size } from "../codetyphon/interface";
import ImageComponent from "../codetyphon/components/ImageComponent";
import drawImageSystem from "../systems/drawImage";
import updatePostion from "../systems/updatePostion";
import stayInScreen from "../systems/stayInScreen";
import updateScore from "../systems/updateScore";
import Component from "../codetyphon/Component";

const size: Size = {
  width: 50,
  height: 50
};
const postion: Postion = {
  x: 130,
  y: 50
};
const velocity: Postion = {
  x: 1,
  y: 1
};

const chrome = new GameObject("chrome", size, postion, velocity);

chrome.addComponent(new ImageComponent("/images/chrome-100.png"));
chrome.addComponent(new Component("score"));
chrome.addSystem(updatePostion);
chrome.addSystem(stayInScreen);
chrome.addSystem(drawImageSystem);
chrome.addSystem(updateScore);
export default chrome;
