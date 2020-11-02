import eventListeners from './event_listeners';

class Game { 
    constructor(canvas,width,height){
        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        const ctx = this.canvas.getContext("2d");


        eventListeners(this.canvas);
    }

    start(){
    }
}


export default Game;