

class Key {
    constructor(name, img, width, height, posX, posY){
        // General details
        this.name = name;

        // Set img to Img Object
        let keysImg = new Image()
        keysImg.src = img;
        this.img = keysImg

        this.width = width;
        this.height = height;
        // Where it starts on the canvas
        this.posX = posX;
        this.posY = posY;
    }
}


export default Key
