import System from "../codetyphon/System";

const updateScore = new System("updateScore");
updateScore.exec = (p5) => {
  const scoreComponent = updateScore.GameObject.getComponent("score");
  p5.textSize(30);
  p5.text(scoreComponent.getDate("score"), 30, 60);
  p5.fill(255, 255, 255);
};
export default updateScore;
