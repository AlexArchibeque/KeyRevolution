import imageFace from '../imgs/Alexzander_Archibeque.jpg';

const default_image = new Image();
default_image.src = imageFace;

const eventListeners = (canvas,game,ctx) => {
    canvas.addEventListener("click",()=>{ 
        ctx.drawImage( default_image , 100, 0, 100, 100);
    })

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