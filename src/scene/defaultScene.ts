import Scene from "../codetyphon/Scene";
import background from "../gameObjects/background";
import chrome from "../gameObjects/chrome";

const defaultScene = new Scene("game");

defaultScene.addGameObject(background);
defaultScene.addGameObject(chrome);

export default defaultScene;
