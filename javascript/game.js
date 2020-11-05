import eventListeners from './event_listeners';

//Difficulties
import easy from './key_maps/easy';

class Game { 
    constructor(canvas,width,height){

        //
        this.frameCount = 0;

        // Current key map set into arrays as to keep track of order.
        this.keys = {
            a:[],
            s:[],
            d:[],
            f:[],

            j:[],
            k:[],
            l:[],
            colon:[],

            space:[]
        };

        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        // Game Over Check
        this.gameOver = false;

        this.ctx = this.canvas.getContext("2d");

        eventListeners(this.canvas, this, this.ctx);

        this.setKeyMap("easy");
    }

    setKeyMap(difficulty){
        if(difficulty === "easy"){
            this.keys = easy();
        }else if(difficulty === "medium"){

        }else if(difficulty === "hard"){

        }else{

        }
    }

    handleKey(key){
        let currentKey = document.getElementById(key).getBoundingClientRect();
        // Grabs position of key to be used compared to the scrolling objects.
        let keyY = currentKey.top
        let keyX = currentKey.left
        
    }

    draw(count){
        Object.keys(this.keys).forEach((key) => {
            this.keys[key].forEach(keyElement => {
                this.ctx.drawImage(
                    keyElement.img, 
                    keyElement.posX,
                    keyElement.posY + count,
                    keyElement.width,
                    keyElement.height
                )
            })
        })
    }

    // Temporary stop game
    stop(key) {
        //Reset Function
        if(this.gameOver === true && key === "r"){
            this.frameCount = 0;
        }

        this.gameOver ? this.gameOver = false : this.gameOver = true;
        this.start();
    }
    
    // Game loop
    start(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.draw(this.frameCount++);
        if(!this.gameOver){
            requestAnimationFrame(this.start.bind(this))
        }
    }

}


export default Game;