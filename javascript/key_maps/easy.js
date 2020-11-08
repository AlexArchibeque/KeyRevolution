import {KeyA, KeyS, KeyColon, KeyL} from './keys'
import defaultImage from '../../imgs/Alexzander_Archibeque.jpg';
// import audioFile from '../../songs/buttercup.mp3'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));


function easy() {
    let audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);

    // Grab the keymap letter you want to insert a letter into.
    // push it in
    // new KeyX(imageType, position in line);
    
    let keyMap = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    keyMap["a"].push(new KeyA(2, 1));
    keyMap["s"].push(new KeyS(2, 1));

    keyMap["a"].push(new KeyA(2, 2));
    keyMap["s"].push(new KeyS(2, 2));


    keyMap["a"].push(new KeyA(2, 3));
    keyMap["colon"].push(new KeyColon(2, 3));
    
    keyMap["l"].push(new KeyL(1, 4));
    keyMap["l"].push(new KeyL(1, 5));

    keyMap["s"].push(new KeyS(2, 6));
    keyMap["colon"].push(new KeyColon(2, 6));

    keyMap["s"].push(new KeyS(1, 7));




    return [keyMap, audioTrack];
}

export default easy;