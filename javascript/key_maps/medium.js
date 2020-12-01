import {KeyA, KeyS, KeyF, KeyD} from './keys'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));

function medium() {
    let audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);

    
    let keyMap = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    let a = [199, 503, 632, 986, 1284, 1374, 1884, 2007, 2183, 2486, 2665, 2784, 3146, 3264, 3564, 3684, 3920, 4220, 4462, 4645]
    let d = [320, 440, 813, 864, 1165, 1407, 1586, 1705, 1764, 1947, 2065, 2272, 2425, 2604, 2902, 3085, 3204, 3325, 3504, 3744, 3982, 4164, 4402]
    let f = [377, 532, 811, 1044, 1225, 1467, 1645, 1736, 1947, 2126, 2303, 2363, 2719, 2964, 3204, 3384, 3804, 4042, 4282, 4582]
    let s = [267, 409, 631, 922, 1106, 1346, 1526, 1855, 2007, 2065, 2243, 2362, 2544, 2844, 3024, 3146, 3265, 3443, 3625, 3684, 3744, 3862, 3981, 4102, 4343, 4518, 4646]

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

    return [keyMap, audioTrack, (a.length + d.length + f.length + s.length)];
}

export default medium;