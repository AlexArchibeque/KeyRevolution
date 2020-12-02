

const eventListeners = (canvas,game,ctx) => {
    // clicking difficulties buttons.

    // Add functionality to disable buttons completely
    const BUTTON_NAMES = [
        "a-button","s-button","d-button","f-button",
        "j-button","k-button","l-button","colon-button",
        "space-button"]

    const edit = document.getElementById("edit-button");
    edit.onclick = () => {
        game.setKeyMap("edit")
        game.stop("restart")
    }

    const easy = document.getElementById("easy-button");
    easy.onclick = () => {
        game.setKeyMap("easy")
        game.stop("restart")
    }
    
    const medium = document.getElementById("medium-button");
    medium.onclick = () => {
        game.setKeyMap("medium");
        game.stop("restart")
    }

    const hard = document.getElementById("hard-button");
    hard.onclick = () => {
        game.setKeyMap("hard")
        game.stop("restart")
    }
    // Audio event listeners

    let volumeDown = document.getElementById("volume-down");
    volumeDown.onclick = () => {
        game.handleAudio("down")
    }

    let volumeUp = document.getElementById("volume-up");
    volumeUp.onclick = () => {
        game.handleAudio("up")
    }

    let playButton = document.getElementById("play-button");
    playButton.onclick = () => {
        if(game.audio.paused){
            game.audio.play();
        } else{ 
            game.audio.pause();
        }
    }


    // Listening for key presses
    document.addEventListener("keydown", (event)=>{
        switch(event.code){
            case "KeyA": // A Key
                game.handleKey("a-button","a");
                game.editMode("a")
                return;
            case "KeyS": // S Key
                game.handleKey("s-button","s");
                game.editMode("s")
                return;
            case "KeyD": // D Key
                game.handleKey("d-button","d");
                game.editMode("d")
                return;
            case "KeyF": // F Key
                game.handleKey("f-button","f");
                game.editMode("f")
                return;
            // case "KeyJ": // J Key
            //     game.handleKey("j-button","j");
            //     return;
            // case "KeyK": // K Key
            //     game.handleKey("k-button","k");
            //     return;
            // case "KeyL": // L Key
            //     game.handleKey("l-button","l");
            //     return;
            // case "Semicolon": // : Key
            //     game.handleKey("colon-button","colon");
            //     return;
            case "Space": // space Key
                game.handleKey("space-button","space");
                return;
            case "Escape": // Escape key.dff
                return game.stop("escape");
            case "KeyR":
                return game.stop('r');
            default:
                return;
        }
    })
}


export default eventListeners;