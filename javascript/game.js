import eventListeners from './event_listeners';

//Difficulties
import easy from './key_maps/easy';

class Game { 
    constructor(canvas, width, height){

        // Keeps track of where we are in animation frames.
        this.frameCount = 0;
        // Audio Stuff
        this.audio;
        this.audioVolume = 1.0;

        // Current key map set into arrays as to keep track of order.
        this.currentKeyMap = '';


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

        // Current Score
        this.score = {
            perfect:0,
            ok:0,
            bad:0,
            missed: 0
        }

        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        // Game Over Check
        this.gameOver = false;
        this.finished = false;

        // Score Screen
        this.scoreScreen = false;

        this.ctx = this.canvas.getContext("2d");

        eventListeners(this.canvas, this, this.ctx);
        this.setKeyMap("easy");
    }

    setKeyMap(difficulty){
        if(difficulty === "easy"){
            let easyArr = easy();
            this.keys = easyArr[0];
            this.audio = easyArr[1];
            this.currentKeyMap = "easy";
        }else if(difficulty === "medium"){

        }else if(difficulty === "hard"){

        }else{

        }
    }

    // Audio Methods

    handleAudio(input){
         if(input === "down" && this.audioVolume >= 0.05) {
            this.audioVolume -= 0.05;
        } else if(input === "up" && this.audioVolume <= 0.95) {
            this.audioVolume += 0.05;
        }
        let volumePercentage = document.getElementById("volume-percentage");
        volumePercentage.innerHTML = `Volume: ${Math.floor(this.audioVolume * 100)} `

        this.audio.volume = this.audioVolume;
    }

    stopAudio(){
        this.audio.pause();
        this.audio.currentTime = 0;
    }


    // End of Audio Methods
    handleKeyAnimation(button){
        let currentButton = document.getElementById(button);
        if(currentButton.className != "disabled-button"){
            currentButton.className = "pressed-button";
    
            setTimeout(() => {
                currentButton.className = "";
            },100)
        }

    }

    handleKey(button, key){
        // Handles if there are no keys left.
        this.handleKeyAnimation(button)
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

        if(overlapPosY >= 15 && overlapPosY <= 35 ){
            this.keys[key].shift();
            this.score["perfect"] += 1;

        }else if((overlapPosY >= 36 && overlapPosY <= 55) 
        || (overlapPosY <= 14 && overlapPosY >= -6)){
            this.keys[key].shift();
            this.score["ok"] += 1;

        }else if((overlapPosY >= 56 && overlapPosY <= 75) 
        || (overlapPosY <= -7 && overlapPosY >= -27 )) {
            this.keys[key].shift();
            this.score["bad"] += 1;
        }
    }

    draw(count){
        // Draws each element in current key map.
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

    keyCleanUp(count){
        let gameCanvas = document.getElementById("game-canvas").getBoundingClientRect();

        // Checks each array of keys to see if they are out of bounds to be removed from play.
        Object.keys(this.keys).forEach((key) => {
            let newKeyArr = [];
            let currentButton = document.getElementById(`${key}-button`).getBoundingClientRect();
            let buttonBounds = currentButton.top - gameCanvas.top - (currentButton.height/2)

            this.keys[key].forEach( keyElement => {
                let keyElePos = keyElement.posY + count + (keyElement.height/2)
                if((keyElePos - buttonBounds) <= 80){
                    newKeyArr.push(keyElement)
                }
            })
            
            if(this.keys[key].length != newKeyArr){
                this.score["missed"] += (this.keys[key].length - newKeyArr.length)
            }
            this.keys[key] = newKeyArr;
        })
    }


    // Soon to be modal to show current screen/gameover etc.
    setScreenScores(){
        let perfLI = document.getElementById("perfect-score")
        perfLI.innerHTML = this.score["perfect"]
        let okLI = document.getElementById("ok-score")
        okLI.innerHTML = this.score["ok"]
        let badLI = document.getElementById("bad-score")
        badLI.innerHTML = this.score["bad"]
        let missedLI = document.getElementById("missed-score")
        missedLI.innerHTML = this.score["missed"]
    }

    showPauseScreen(fin){
        this.setScreenScores();
        let modal = document.getElementById("score-screen-outer-modal");
        // Changes inner HTML depending on if game is paused or finished.
        let h1Modal = document.getElementById("paused-or-finished");
        let escInstructions = document.getElementById("esc-to-continue");

        if(fin === "finished"){
            h1Modal.innerHTML = "Finished!";
            escInstructions.innerHTML = "Congrats!";
        }else{
            h1Modal.innerHTML = "Paused";
            escInstructions.innerHTML = "<strong>ESC</strong> - To Continue";
        }

        if(modal.style.display === "block"){
            modal.style.display = "none";
            this.scoreScreen = false;
        }else{
            modal.style.display = "block";
            this.scoreScreen = true;
            this.audio.pause();
            
        }
    }

    // Temporary stop game
    checkGameOver(){
        let over = true;
        Object.keys(this.keys).forEach(key => {
            if(this.keys[key].length > 0){
                over = false;
            }
        })
        this.gameOver = over;
        this.finished = over;
    }

    stop(key) {
        //Reset Function
        if(key === "r" && this.gameOver === true){
            this.showPauseScreen();
            this.handleReset();
            
        } else if(key === "escape"){
            
            this.gameOver ? this.gameOver = false : this.gameOver = true;

            // If score screen is up.
            if(this.scoreScreen){
                this.showPauseScreen();
                // Plays audio when pause screen is put away.

                this.audio.play();
                this.start();
            }
        }
    }


    handleReset(){
        // Sets keys to origional of keyMap specificed
        this.setKeyMap(this.currentKeyMap);
        // Resets frame count
        this.frameCount = 0;
        this.gameOver = false;
        this.score = {
            perfect:0,
            ok:0,
            bad:0,
            missed: 0
        }

        // Pauses audio, resets it to begging of the track
        this.stopAudio();
        // Sets audio's volume to what user has it set at.
        this.handleAudio();
        // Starts audio track
        this.audio.play();

        this.start();
    }

    // StartCountdown method.
    startTimer(){
        let countdownBox = document.getElementById("countdown-box");
        countdownBox.style.display = "block";

        setTimeout(() => {
            countdownBox.innerHTML = "3";
        }, 900)
        setTimeout(() => {
            countdownBox.innerHTML = "2";
        }, 1900)
        setTimeout(() => {
            countdownBox.innerHTML = "1";
        }, 2900)

        setTimeout(() => {
            countdownBox.style.display = "none";
            this.audio.play();
            this.start()
        }, 4000)
    }
    
    // Game loop
    start(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.draw(this.frameCount++);
        this.keyCleanUp(this.frameCount);
        
        if(!this.gameOver){
            requestAnimationFrame(this.start.bind(this))
            this.checkGameOver();
        }else if(this.finished) {
            this.showPauseScreen("finished");
        } else {
            this.showPauseScreen();
        }

    }

}


export default Game;