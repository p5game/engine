import System from "../codetyphon/System";

const stayInScreen = new System("updatePostion");
let score = 0;
stayInScreen.exec = (p5) => {
  const body: any = stayInScreen.GameObject.getComponent("body");
  const { postion, velocity, size } = body;
  const { x, y } = postion;
  const { width, height } = stayInScreen.GameObject.scene;
  const top = 0;
  const left = 0;
  const right = width - size.width;
  const bottom = height - size.height;

  const scoreComponent = stayInScreen.GameObject.getComponent("score");

  if (y <= top) {
    velocity.y = 1;
    score += 1;
    scoreComponent.setData("score", score);
  }
  if (y >= bottom) {
    velocity.y = -1;
    score += 1;
    scoreComponent.setData("score", score);
  }
  if (x >= right) {
    velocity.x = -1;
    score += 1;
    scoreComponent.setData("score", score);
  }
  if (x <= left) {
    velocity.x = 1;
    score += 1;
    scoreComponent.setData("score", score);
  }
};
export default stayInScreen;
