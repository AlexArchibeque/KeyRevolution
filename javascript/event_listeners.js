

const eventListeners = (canvas,game,ctx) => {
    // clicking difficulties buttons.
    const BUTTON_NAMES = [
        "a-button","s-button","d-button","f-button",
        "j-button","k-button","l-button",";-button",
        "space-button"]

    const easy = document.getElementById("easy-button");
    easy.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === ";-button"){
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
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === ";-button"
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
            if(idName === "a-button" || idName === "s-button" || idName === "l-button" || idName === ";-button"
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

    // Listening for key presses
    document.addEventListener("keydown", (event)=>{
        switch(event.keyCode){
            case 65: // A Key
                game.handleKey("a-button");
                return;
            case 83: // S Key
                game.handleKey("s-button");
                return;
            case 68: // D Key
                game.handleKey("d-button");
                return;
            case 70: // F Key
                game.handleKey("f-button");
                return;
            case 74: // J Key
                game.handleKey("j-button");
                return;
            case 75: // K Key
                game.handleKey("k-button");
                return;
            case 76: // L Key
                game.handleKey("l-button");
                return;
            case 186: // : Key
                game.handleKey(";-button");
                return;
            case 32: // space Key
                game.handleKey("space-button");
                return;
            case 27: // Escape key.dff
                return game.stop();
            default:
                return;
        }
    })
}


export default eventListeners;