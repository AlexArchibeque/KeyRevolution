import Game from "./game";

import StartView from './start_view';

const GAME_X = 1000;
const GAME_Y = 600;

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById('game-canvas')
    const gameEl = new Game(canvasEl, GAME_X, GAME_Y);
    const startView = new StartView(gameEl);

    startView.start();
})