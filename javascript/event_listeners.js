

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
    }
    const extreme = document.getElementById("extreme-button");
    extreme.onclick = () => {
        BUTTON_NAMES.forEach(idName => {
            let ele = document.getElementById(idName)
            ele.className = idName
        })
    }

    // Listening for key presses
    document.addEventListener("keydown", (event)=>{
        switch(event.keyCode){
            case 65: // A Key
                return console.log("a key")
            case 83: // S Key
                return console.log("s key")
            case 68: // D Key
                return console.log("d key")
            case 70: // F Key
                return console.log("f key")
            case 74: // J Key
                return console.log("j key")
            case 75: // K Key
                return console.log("k key")
            case 76: // L Key
                return console.log("l key")
            case 186: // : Key
                return console.log("; key")
            case 32: // space Key
                return console.log("space key")
            case 27: // Escape key.
                return game.stop();
            default:
                return;
        }
    })
}


export default eventListeners;