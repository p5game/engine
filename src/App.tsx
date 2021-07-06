import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import Game from "./codetyphon/Game";
import defaultScene from "./scene/defaultScene";

export default function () {
  const game = new Game({
    width: 400,
    height: 400
  });
  game.lanch(defaultScene);
  return <Sketch setup={game.setup()} draw={game.draw()} />;
}
