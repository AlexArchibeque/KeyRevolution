import eventListeners from './event_listeners';

class Game { 
    constructor(canvas,width,height){
        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        // Game Over Check
        this.gameOver = false;

        this.ctx = this.canvas.getContext("2d");
        eventListeners(this.canvas,this,this.ctx);

    }

    // Temporary stop game;
    stop() {
        this.gameOver = true;
    }
    
    // Game loop
    start(){
        if(!this.gameOver){
            this.draw();
        }
    }

    draw(){
        requestAnimationFrame(this.draw.bind(this))
    }


}


export default Game;