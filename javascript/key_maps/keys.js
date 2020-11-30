// Brown keys, singular
import AKey from '../../imgs/keys/singles/a-key.png'
import SKey from '../../imgs/keys/singles/s-key.png'
import DKey from '../../imgs/keys/singles/d-key.png'
import FKey from '../../imgs/keys/singles/f-key.png'
import JKey from '../../imgs/keys/singles/j-key.png'
import KKey from '../../imgs/keys/singles/k-key.png'
import LKey from '../../imgs/keys/singles/l-key.png'
import ColonKey from '../../imgs/keys/singles/colon-key.png'

// green keys double.
import A2Key from '../../imgs/keys/doubles/a2-key.png'
import S2Key from '../../imgs/keys/doubles/s2-key.png'
import D2Key from '../../imgs/keys/doubles/d2-key.png'
import F2Key from '../../imgs/keys/doubles/f2-key.png'
import J2Key from '../../imgs/keys/doubles/j2-key.png'
import K2Key from '../../imgs/keys/doubles/k2-key.png'
import L2Key from '../../imgs/keys/doubles/l2-key.png'
import Colon2Key from '../../imgs/keys/doubles/colon2-key.png'


export class KeyA {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()
        
        if(img === 1) {   
            keysImg.src = AKey;
        }else if(img === 2) {
            keysImg.src = A2Key;
        }
        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 10;
        this.posY = posY;
    }
}

export class KeyS {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = SKey;
        }else if(img === 2) {
            keysImg.src = S2Key;
        }
        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 100;
        this.posY = posY;
    }
}

export class KeyD {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = DKey;
        }else if(img === 2) {
            keysImg.src = D2Key;
        }
        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 190;
        this.posY = posY;
    }
}

export class KeyF {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = FKey;
        }else if(img === 2) {
            keysImg.src = F2Key;
        }

        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 280;
        this.posY = posY;
    }
}

export class KeyJ {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = JKey;
        }else if(img === 2) {
            keysImg.src = J2Key;
        }

        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = "placeholder";
        this.posY = posY;
    }
}

export class KeyK {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = KKey;
        }else if(img === 2) {
            keysImg.src = K2Key;
        }

        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = "placeholder";
        this.posY = posY;
    }
}

export class KeyL {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = LKey;
        }else if(img === 2) {
            keysImg.src = L2Key;
        }
        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 820;
        this.posY = posY;
    }
}

export class KeyColon {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()

        if(img === 1) {   
            keysImg.src = ColonKey;
        }else if(img === 2) {
            keysImg.src = Colon2Key;
        }


        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = 910;
        this.posY = posY;
    }
}

export class KeySpace {
    constructor(img, posY){

        // Set img to Img Object
        let keysImg = new Image()
        keysImg.src = img;
        this.img = keysImg

        this.width = 80;
        this.height = 80;
        // Where it starts on the canvas
        this.posX = "placeholder";
        this.posY = posY;
    }
}




