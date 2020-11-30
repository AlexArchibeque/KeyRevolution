import {KeyA, KeyS, KeyF, KeyD} from './keys'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));

function hard() {
    let audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);

    // Grab the keymap letter you want to insert a letter into.
    // push it in
    // new KeyX(imageType, position in line);
    
    let keyMap = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    let a = [210, 529, 917, 1162, 1401, 1999, 2061, 2661, 2838, 3320, 3797, 4216, 4399]
    let d = [322, 798, 981, 1222, 1579, 1879, 2183, 2360, 2420, 2599, 2901, 2991, 3380, 3470, 3917, 4100, 4280, 4518]
    let f = [380, 504, 859, 1044, 1283, 1641, 1761, 1879, 2241, 2299, 2360, 2479, 2962, 3442, 3981, 4038, 4400]
    let s = [265, 439, 624, 918, 1101, 1340, 1402, 1700, 1940, 2121, 2539, 2871, 3021, 3348, 3500, 3858, 4159, 4280, 4518]

    a.forEach( posY => { 
        let key = new KeyA(1, (posY - 470)* -1)
        keyMap["a"].push(key)
    })

    s.forEach( posY => { 
        let key = new KeyS(1, (posY - 470)* -1)
        keyMap["s"].push(key)
    })

    d.forEach( posY => { 
        let key = new KeyD(1, (posY - 470)* -1)
        keyMap["d"].push(key)
    })

    f.forEach( posY => { 
        let key = new KeyF(1, (posY - 470)* -1)
        keyMap["f"].push(key)
    })

    return [keyMap, audioTrack];
}

export default hard;