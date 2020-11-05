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

    handleKey(button, key){
        // Handles if there are no keys left.
        if(this.keys[key].length === 0){
            return;
        }

        let gameCanvas = document.getElementById("game-canvas").getBoundingClientRect();
        let currentButton = document.getElementById(button).getBoundingClientRect();

        // Grabs Y position of button 
        // subtracts half the height of the current button in order to get the middle.
        let buttonY = currentButton.top - gameCanvas.top - (currentButton.height/2)

        // Grabs Y position of first in line key falling down the screen.
        let firstKey = this.keys[key][0]
        // Takes Y Position of current key, adds frameCount to it to get the relative position.
        // Then adds the total height of the key and divides by 2 to get the middle of the element
        let keyY = firstKey.posY + this.frameCount + (firstKey.height/2)
        
        // Calculates if button is close enough to removed/counted etc
        this.handleKeyAlignmentCollision(keyY, buttonY, key);
    }

    handleKeyAlignmentCollision(keyY, buttonY, key){
        let overlapPosY = keyY - buttonY
        if(overlapPosY > 0 && overlapPosY < 20 ){
            console.log("perfect")
        }
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