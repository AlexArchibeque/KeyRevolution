import eventListeners from './event_listeners';


//Difficulties
import easy from './key_maps/easy';
import medium from './key_maps/medium';
import hard from './key_maps/hard';


// Edit Key
import { KeyA } from './key_maps/keys'

class Game { 
    constructor(canvas, width, height){

        // Keeps track of where we are in animation frames.
        this.frameCount = 0;
        // Audio Stuff
        this.audio;
        this.audioVolume = 1.0;

        // Current key map set into arrays as to keep track of order.
        this.currentKeyMap = '';

        // handles of clicking difficulties
        this.reset = false;
        // handles clicking on song
        this.songName = "Buttercup";
        // Streak of keys hit
        this.streak = 0;
        // Score
        this.numScore = {
            perfect:0,
            ok: 0,
            bad: 0,
            total: 0
        };

        // Local Storage Scores
        this.storedScores;


        this.keys = {
            // a:[new KeyA(1,-10000)],
            a:[],
            s:[],
            d:[],
            f:[],

            // j:[],
            // k:[],
            // l:[],
            // colon:[],

            // space:[]
        };
        this.editKeyMap = {
            a:[],
            s:[],
            d:[],
            f:[]
        }

        // Current Score
        this.score = {
            perfect:0,
            ok:0,
            bad:0,
            missed: 0
        }

        this.total = 0

        // Set the width/height of the game screen.
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;

        // Game Over Check
        this.gameOver = false;
        this.finished = false;

        // Allows the use of r on finish screen
        this.finishScreen;

        // Score Screen
        this.scoreScreen = false;

        this.ctx = this.canvas.getContext("2d");

        eventListeners(this.canvas, this, this.ctx);
        this.setKeyMap("easy");
    }

    submitScore(name){
        // this.currentKeyMap == difficulty
        // this.songName == song's name
        let storageName = `${this.currentKeyMap}-${this.songName}`
        let currentScores = JSON.parse(window.localStorage.getItem(storageName))
        
        let newScore = [name, this.numScore.total]
        if(currentScores === null){
            window.localStorage.setItem(storageName, JSON.stringify([newScore]))
        }else{
            currentScores.push(newScore)
            window.localStorage.setItem(storageName, JSON.stringify(currentScores))
        }
        this.retrieveScores()
    }

    retrieveScores(){
        let storageName = `${this.currentKeyMap}-${this.songName}`
        this.storedScores = JSON.parse(window.localStorage.getItem(storageName))
        this.renderScores()
    }

    renderScores(){
        let htmlString = ''

        if(this.storedScores){
            this.storedScores.forEach(entry =>{
                htmlString += `<li>${entry[0]} ${entry[1]}</li>`
            })

            document.getElementById("num-score-ul").innerHTML = htmlString
        }
    }

    editMode(key){
        let i = 0
        this.editKeyMap[`${key}`].push(this.frameCount)
        i = i++
    }

    setKeyMap(difficulty){
        if(this.audio){
            this.audio.pause()
        }

        this.frameCount = 0
        this.numScore = {
            perfect:0,
            ok: 0,
            bad: 0,
            total: 0
        };

        this.streak = 0;

        this.score = {
            perfect:0,
            ok:0,
            bad:0,
            missed: 0
        }

        document.getElementById("streak-number").innerHTML = `<p class="weak-streak">Streak: ${this.streak} </p>`
        document.getElementById("streak-score").innerHTML = `<p class="weak-score">Score: ${this.numScore.total} </p>`
        document.getElementById("streak-type").innerHTML = `<p class="missed-class">Reset</p>`

        if(difficulty === "easy"){
            let easyArr = easy(this.songName);
            this.keys = easyArr[0];
            this.audio = easyArr[1];
            this.audio.volume = this.audioVolume
            this.total = easyArr[2];

            this.currentKeyMap = "easy";
        }else if(difficulty === "medium"){
            let mediumArr = medium(this.songName);
            this.keys = mediumArr[0];
            this.audio = mediumArr[1];
            this.audio.volume = this.audioVolume
            this.total = mediumArr[2];
            

            this.currentKeyMap = "medium"
        }else if(difficulty === "hard"){
            let hardArr = hard(this.songName);
            this.keys = hardArr[0];
            this.audio = hardArr[1];
            this.audio.volume = this.audioVolume
            this.total = hardArr[2];

            this.currentKeyMap = "hard"

        }else if(difficulty === "edit"){
            let Arr = easy(this.songName);
            this.audio = Arr[1]
            this.audio.volume = this.audioVolume
            this.keys = {
                a:[new KeyA(1,-10000)],
                s:[],
                d:[],
                f:[],
    
                // j:[],
                // k:[],
                // l:[],
                // colon:[],
    
                // space:[]
            };
            this.editKeyMap = {
                a:[],
                s:[],
                d:[],
                f:[]
            }
            this.currentKeyMap = "edit"
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

        document.getElementById("volume-percentage-1").innerHTML = `Volume: ${Math.floor(this.audioVolume * 100)} `

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
        let firstKey = this.keys[key][this.keys[key].length - 1]
        // Takes Y Position of current key, adds frameCount to it to get the relative position.
        // Then adds the total height of the key and divides by 2 to get the middle of the element
        let keyY = firstKey.posY + this.frameCount + (firstKey.height/2)
        
        // Calculates if button is close enough to removed/counted etc
        this.handleKeyAlignmentCollision(keyY, buttonY, key);
    }

    handleKeyAlignmentCollision(keyY, buttonY, key){
        let overlapPosY = keyY - buttonY
        let streakType = document.getElementById("streak-type")
        let positivePosY = 0;
        if(overlapPosY < 0){
            positivePosY = overlapPosY * -1
        }


        if(overlapPosY >= 15 && overlapPosY <= 35 ){
            this.keys[key].pop();
            this.score["perfect"] += 1;
            this.numScore["perfect"] += Math.ceil((100 * (overlapPosY * .01)))
            this.numScore["total"] += Math.ceil((100 * (overlapPosY * .01)))
            streakType.innerHTML = "<p class='perfect-class'>PERFECT!!</p>"
            this.streak += 1

        }else if((overlapPosY >= 36 && overlapPosY <= 55) 
        || (overlapPosY <= 14 && overlapPosY >= -6)){
            this.keys[key].pop();
            this.score["ok"] += 1;
            if(positivePosY > 0){
                this.numScore["ok"] += Math.ceil((50 * (positivePosY * .01)))
                this.numScore["total"] += Math.ceil((50 * (positivePosY * .01)))
            }else{
                this.numScore["ok"] += Math.ceil((50 * (overlapPosY * .01)))
                this.numScore["total"] += Math.ceil((50 * (overlapPosY * .01)))
            }
            streakType.innerHTML = "<p class='ok-class'>O.K.</p>"
            this.streak += 1

        }else if((overlapPosY >= 56 && overlapPosY <= 75) 
        || (overlapPosY <= -7 && overlapPosY >= -27 )) {
            this.keys[key].pop();
            this.score["bad"] += 1;

            if(positivePosY > 0){
                this.numScore["bad"] += Math.ceil((25 * (positivePosY * .01)))
                this.numScore["total"] += Math.ceil((25 * (positivePosY * .01)))
            }else{
                this.numScore["bad"] += Math.ceil((25 * (overlapPosY * .01)))
                this.numScore["total"] += Math.ceil((25 * (overlapPosY * .01)))
            }

            streakType.innerHTML = "<p class='bad-class'>BAD :(</p>"
            this.streak += 1
        }

        if(this.streak < 30){
            document.getElementById("streak-number").innerHTML = `<p class="weak-streak">Streak: ${this.streak} </p>`
        } else if ( this.streak > 30 && this.streak < 60){
            document.getElementById("streak-number").innerHTML = `<p class="med-streak">Streak: ${this.streak} </p>`
        } else if ( this.streak > 60) {
            document.getElementById("streak-number").innerHTML = `<p class="strong-streak">Streak: ${this.streak} </p>`
        }


        if(this.numScore.total < 1000) {
            document.getElementById("streak-score").innerHTML = `<p class="weak-score">Score: ${this.numScore.total} </p>`
        } else if( this.numScore.total > 1000 && this.numScore.total < 2000){
            document.getElementById("streak-score").innerHTML = `<p class="med-score">Score: ${this.numScore.total} </p>`
        } else if (this.numScore.total > 2000){
            document.getElementById("streak-score").innerHTML = `<p class="strong-score">Score: ${this.numScore.total} </p>`
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
            
            if(this.keys[key].length != newKeyArr.length){
                this.score["missed"] += (this.keys[key].length - newKeyArr.length)
                document.getElementById("streak-type").innerHTML = "<p class='missed-class'>MISSED</p>"
                document.getElementById("streak-number").innerHTML = `Streak: 0`
                this.streak = 0;
            }
            this.keys[key] = newKeyArr;
        })
    }


    // Soon to be modal to show current screen/gameover etc.
    setScreenScores(){
        let perfLI = document.getElementById("perfect-score")
        perfLI.innerHTML = this.score["perfect"]
        document.getElementById("perf-num-score").innerHTML = this.numScore.perfect
        let okLI = document.getElementById("ok-score")
        okLI.innerHTML = this.score["ok"]
        document.getElementById("ok-num-score").innerHTML = this.numScore.ok
        let badLI = document.getElementById("bad-score")
        badLI.innerHTML = this.score["bad"]
        document.getElementById("bad-num-score").innerHTML = this.numScore.bad
        let missedLI = document.getElementById("missed-score")
        missedLI.innerHTML = this.score["missed"]
        let totalLi = document.getElementById("total-score")
        totalLi.innerHTML = this.total
        document.getElementById("total-num-score").innerHTML = this.numScore.total
    }

    showPauseScreen(fin){
        this.setScreenScores();
        this.retrieveScores();
        let modal = document.getElementById("score-screen-outer-modal");

        // Changes inner HTML depending on if game is paused or finished.
        let h1Modal = document.getElementById("paused-or-finished");
        let escInstructions = document.getElementById("esc-to-continue");
        let secondaryInstructions = document.getElementById("secondary-instructions")

        if(fin === "finished"){
            this.finishScreen = true;

            h1Modal.innerHTML = "Finished!";
            secondaryInstructions.innerHTML = "<strong>ESC</strong>- To restart"
            escInstructions.innerHTML = "Congrats!";

            document.getElementById("submit-score-form").classList= "show"
        }else if (fin === "songOrDiffChange"){
            h1Modal.innerHTML = `${this.songName.charAt(0).toUpperCase() + this.songName.slice(1)} restart!`;
            secondaryInstructions.innerHTML = `Difficulty: <strong>${this.currentKeyMap.charAt(0).toUpperCase() + this.currentKeyMap.slice(1)} </strong`
            escInstructions.innerHTML = "<strong>ESC</strong> - To Start!"
        }else{
            h1Modal.innerHTML = "Paused";
            secondaryInstructions.innerHTML = "<strong>R</strong>- To restart"
            escInstructions.innerHTML = "<strong>ESC</strong> - To Continue";
        }

        document.getElementById("submit-score").classList = ""
        document.getElementById("submit-score").disabled = false

        if(modal.style.display === "block"){
            document.getElementById("submit-score-form").classList = "hidden"
            modal.style.display = "none";
            this.scoreScreen = false;
            this.reset = false;
            this.finishScreen = false;
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
            if(!this.finishScreen){
                this.showPauseScreen();
                this.handleReset();
            }
            
        }else if(key === "restart"){

            this.gameOver ? this.gameOver = false : this.gameOver = true;
            this.reset = true

        }else if(key === "escape"){

            if(this.finishScreen){
                this.showPauseScreen("songOrDiffChange");
                this.handleReset();
            }

            if(this.currentKeyMap === "edit"){
                console.clear();
                console.log(this.editKeyMap)
            }

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

        // KeyScore reset
        this.score = {
            perfect:0,
            ok:0,
            bad:0,
            missed: 0
        }

        // NumberScore Reset
        this.numScore = {
            perfect:0,
            ok: 0,
            bad: 0,
            total: 0
        };

        // Right side reset
        document.getElementById("streak-type").innerHTML = "<p class='missed-class'></p>"
        document.getElementById("streak-number").innerHTML = `Streak: 0`
        document.getElementById("streak-score").innerHTML = `Score: ${this.numScore.total}`

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
        } else if(this.reset) {
            this.showPauseScreen("songOrDiffChange");
        } else {
            this.showPauseScreen();
        }

    }

}


export default Game;