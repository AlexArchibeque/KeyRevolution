import {KeyA, KeyS, KeyF, KeyD} from './keys'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));

function easy(song) {
    let audioTrack;

    let a = [];
    let d = [];
    let f = [];
    let s = []; 
    
    if(song === "Buttercup"){
        audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);
        a = [210, 529, 917, 1162, 1401, 1999, 2061, 2661, 2838, 3320, 3797, 4216, 4399]
        d = [322, 798, 981, 1222, 1579, 1879, 2183, 2360, 2420, 2599, 2901, 2991, 3380, 3470, 3917, 4100, 4280, 4518]
        f = [380, 504, 859, 1044, 1283, 1641, 1761, 1879, 2241, 2299, 2360, 2479, 2962, 3442, 3981, 4038, 4400]
        s = [265, 439, 624, 918, 1101, 1340, 1402, 1700, 1940, 2121, 2539, 2871, 3021, 3348, 3500, 3858, 4159, 4280, 4518]
    }else if (song === "Dummy"){
        audioTrack = new Audio(`${PATH}/songs/dummy.mp3`);
        a = [130, 411, 704, 817, 876, 1219, 1276, 1449, 1794, 2138, 2254, 2543, 2830, 2947, 3178, 3520, 4153, 4210, 4442, 4500]
        d = [240, 529, 644, 760, 990, 1162, 1336, 1394, 1562, 1734, 1965, 2313, 2428, 2659, 2774, 3062, 3121, 3235, 3293, 3349, 3636, 4041, 4268, 4410, 4528, 4701]
        f = [299, 586, 705, 818, 1047, 1336, 1622, 1909, 2023, 2369, 2713, 3005, 3062, 3292, 3408, 3694, 4096, 4324, 4557, 4644]
        s = [183, 354, 472, 645, 759, 932, 1103, 1276, 1393, 1505, 1679, 1851, 2081, 2196, 2486, 2598, 2773, 2889, 3005, 3121, 3179, 3235, 3467, 3577, 3982, 4211, 4268, 4381, 4473, 4585]
    }else if (song === "Hills of Radiance"){
        audioTrack = new Audio(`${PATH}/songs/hillsofradiant.mp3`);
        a = [98, 621, 996, 1499, 1697, 2236, 2990, 3272, 3797]
        d = [360, 716, 902, 1233, 1332, 1524, 1861, 2126, 2504, 2658, 3095, 3394, 3563, 3934]
        f = [438, 717, 1082, 1332, 1950, 2573, 2659, 3152, 3456, 3621]
        s = [279, 524, 622, 821, 1154, 1492, 1773, 2039, 2127, 2417, 2748, 3034, 3213, 3336, 3512, 3681, 3748, 3858, 3935]
        
    }

    // Grab the keymap letter you want to insert a letter into.
    // push it in
    // new KeyX(imageType, position in line);
    
    let keyMap = {
        a:[], s:[], d:[], f:[],
    };



    a.forEach( posY => { 
        let key = new KeyA(1, (posY - 470)* -1)
        keyMap["a"].unshift(key)
    })

    s.forEach( posY => { 
        let key = new KeyS(1, (posY - 470)* -1)
        keyMap["s"].unshift(key)
    })

    d.forEach( posY => { 
        let key = new KeyD(1, (posY - 470)* -1)
        keyMap["d"].unshift(key)
    })

    f.forEach( posY => { 
        let key = new KeyF(1, (posY - 470)* -1)
        keyMap["f"].unshift(key)
    })

    return [keyMap, audioTrack, (a.length + d.length + f.length + s.length)];
}

export default easy;