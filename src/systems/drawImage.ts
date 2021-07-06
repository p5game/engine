import System from "../codetyphon/System";

const drawImageSystem = new System("drawImageSystem");
drawImageSystem.exec = (p5) => {
  const imageComponent: any = drawImageSystem.GameObject.getComponent("image");
  const body: any = drawImageSystem.GameObject.getComponent("body");

  p5.image(imageComponent.img, body.postion.x, body.postion.y, 50, 50);
};
export default drawImageSystem;
