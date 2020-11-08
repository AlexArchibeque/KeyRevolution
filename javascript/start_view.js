

class StartView {
    constructor(game){
        this.game = game;
    }
    
    start() {
        let startButton = document.getElementById("start-button")
        let startScreen = document.getElementById("start-screen-outer-modal");
        
        startButton.addEventListener("click", () => {
            startScreen.style.display = "none";
            //For testing ***
            this.game.audio.play();
            this.game.stopAudio();
            this.game.start();

            // this.game.stopAudio();
            // this.game.startTimer();
        })
    }
}

export default StartView;