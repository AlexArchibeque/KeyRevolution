import eventListeners from './event_listeners';
import Key from './keys.js'
import imageFace from '../imgs/Alexzander_Archibeque.jpg';


class Game { 
    constructor(canvas,width,height){
        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        // Game Over Check
        this.gameOver = false;

        this.ctx = this.canvas.getContext("2d");

        eventListeners(this.canvas, this, this.ctx);
        this.makeKeys();

    }

    makeKeys(){
        this.keyTest = new Key('face', imageFace, 80,80, 10,0)
    }

    handleKey(key){
        let currentKey = document.getElementById(key).getBoundingClientRect();
        // Grabs position of key to be used compared to the scrolling objects.
        let keyY = currentKey.top
        let keyX = currentKey.left

        
    }

    // Temporary stop game;
    stop() {
        this.gameOver = true;
    }
    
    // Game loop
    start(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.drawImage(
            this.keyTest.img , 
            this.keyTest.posX , 
            this.keyTest.posY,
            this.keyTest.width,
            this.keyTest.height)
        
        this.keyTest.posY += 1.5
        requestAnimationFrame(this.start.bind(this))
        console.log("started")
    }

}


export default Game;