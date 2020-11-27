

const eventListeners = (canvas,game,ctx) => {
    // clicking difficulties buttons.

    // Add functionality to disable buttons completely
    const BUTTON_NAMES = [
        "a-button","s-button","d-button","f-button",
        "j-button","k-button","l-button","colon-button",
        "space-button"]

    const easy = document.getElementById("easy-button");
    easy.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === "colon-button"){
                ele.className = idName;
            }else{
                ele.className = "disabled-button";
            }
        })

        game.setKeyMap("easy")
    }
    
    const medium = document.getElementById("medium-button");
    medium.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === "colon-button"
                || idName === "d-button" || idName === "k-button" ){
                ele.className = idName;
            }else{
                ele.className = "disabled-button";
            }
        })

        game.setKeyMap("medium")
    }

    const hard = document.getElementById("hard-button");
    hard.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === "colon-button"
                || idName === "d-button" || idName === "k-button"
                || idName === "j-button" || idName === "f-button" ){
                ele.className = idName;
            }else{
                ele.className = "disabled-button";
            }
        })

        game.setKeyMap("hard")
    }
    const extreme = document.getElementById("extreme-button");
    extreme.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            ele.className = idName
        })

        game.setKeyMap("extreme")
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
                return;
            case "KeyS": // S Key
                game.handleKey("s-button","s");
                return;
            case "KeyD": // D Key
                game.handleKey("d-button","d");
                return;
            case "KeyF": // F Key
                game.handleKey("f-button","f");
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