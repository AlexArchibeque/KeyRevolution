

class StartView {
    constructor(game){
        this.game = game;
    }
    
    start() {
        let startButton = document.getElementById("start-button")
        let startScreen = document.getElementById("start-screen-outer-modal");
        
        startButton.addEventListener("click", () => {
            startScreen.style.display = "none";
            this.game.stopAudio();
            this.game.startTimer();

        })
    }
}

export default StartView;