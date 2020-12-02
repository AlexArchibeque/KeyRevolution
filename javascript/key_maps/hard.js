import {KeyA, KeyS, KeyF, KeyD} from './keys'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));

function hard(song) {
    let audioTrack;

    let a = [];
    let d = [];
    let f = [];
    let s = []; 
    
    if(song === "buttercup"){
        audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);
        a = [35, 319, 406, 681, 802, 919, 1160, 1220, 1266, 1313, 1581, 1821, 2418, 2539, 2598, 2839, 2958, 3015, 3226, 3288, 3679, 3722, 4036, 4144, 4398, 4472, 4506]
        d = [138, 200, 469, 618, 742, 861, 1009, 1056, 1103, 1369, 1462, 1520, 1640, 1699, 1760, 1854, 2002, 2182, 2238, 2270, 2675, 2777, 2823, 2899, 3046, 3109, 3167, 3346, 3408, 3468, 3559, 3597, 3860, 4007, 4203, 4280, 4336, 4543]
        f = [170, 500, 682, 802, 1023, 1071, 1400, 1462, 1700, 1943, 2121, 2210, 2253, 2299, 2703, 2792, 3080, 3139, 3376, 3499, 3707, 3753, 3950, 4233, 4281, 4558, 4624]
        s = [76, 261, 378, 438, 529, 617, 743, 861, 980, 1131, 1207, 1249, 1298, 1519, 1581, 1640, 1789, 1882, 2060, 2359, 2476, 2569, 2659, 2766, 2808, 2869, 2925, 2987, 3199, 3258, 3317, 3437, 3527, 3582, 3629, 3802, 3916, 3977, 4085, 4203, 4367, 4399, 4444, 4506, 4592, 4691]
    }else if (song === "dummy"){
        audioTrack = new Audio(`${PATH}/songs/dummy.mp3`);
    }else if (song === "hillsofradiance"){
        audioTrack = new Audio(`${PATH}/songs/hillsofradiant.mp3`);

    }

    // Grab the keymap letter you want to insert a letter into.
    // push it in
    // new KeyX(imageType, position in line);
    
    let keyMap = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    
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

export default hard;