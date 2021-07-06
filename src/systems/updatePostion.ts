import System from "../codetyphon/System";

const updatePostion = new System("updatePostion");
updatePostion.exec = (p5) => {
  const body: any = updatePostion.GameObject.getComponent("body");
  const { postion, velocity } = body;
  postion.x += velocity.x;
  postion.y += velocity.y;
};
export default updatePostion;
