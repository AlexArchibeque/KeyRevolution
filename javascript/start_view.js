

class StartView {
    constructor(game){
        this.game = game;
    }

    start() {
        let startButton = document.getElementById("start-button")
        let startScreen = document.getElementById("start-screen-outer-modal");

        startButton.addEventListener("click", () => {
            startScreen.style.display = "none";
            this.game.start()
        })
        // this.game.start(); // Starts the actual game
    }
}

export default StartView;