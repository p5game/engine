import System from "../codetyphon/System";

const drawBgSystem = new System("drawBgSystem");
drawBgSystem.exec = (p5) => {
  const bgComponent: any = drawBgSystem.GameObject.getComponent("bg");
  p5.background(bgComponent.color);
};
export default drawBgSystem;
