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

    // keyMap["a"].push(new KeyA());
    // keyMap["s"].push(new KeyS());
    // keyMap["l"].push(new KeyL());
    // keyMap["colon"].push(new KeyColon());

    keyMap["a"].push(new KeyA(2, 4.5));
    keyMap["s"].push(new KeyS(2, 4.5));

    keyMap["l"].push(new KeyL(1, 5.8));

    keyMap["a"].push(new KeyA(2, 6.8));
    keyMap["s"].push(new KeyS(2, 6.8));

    keyMap["l"].push(new KeyL(1,7.2))

    keyMap["l"].push(new KeyL(1, 8))

    keyMap["a"].push(new KeyA(2, 9.2));
    keyMap["colon"].push(new KeyColon(2, 9.2));

    keyMap["s"].push(new KeyS(2, 10.5));
    keyMap["colon"].push(new KeyColon(2, 10.5));

    keyMap["l"].push(new KeyL(2, 11.5));
    keyMap["a"].push(new KeyA(2, 11.5));

    keyMap["a"].push(new KeyA(2, 12.5));
    keyMap["s"].push(new KeyS(2, 12.5));

    keyMap["l"].push(new KeyL(2, 13));
    keyMap["colon"].push(new KeyColon(2, 13));

    keyMap["l"].push(new KeyL(1, 13.5));
    keyMap["colon"].push(new KeyColon(1, 14));

    keyMap["a"].push(new KeyA(1, 14.5));
    keyMap["s"].push(new KeyS(1, 15.2));

    keyMap["a"].push(new KeyA(1, 16));
    keyMap["s"].push(new KeyS(1, 17));

    keyMap["l"].push(new KeyL(1, 17.5));
    keyMap["colon"].push(new KeyColon(1, 18.2));

    keyMap["l"].push(new KeyL(1, 19));
    keyMap["colon"].push(new KeyColon(1, 20));


    keyMap["a"].push(new KeyA(2, 21));
    keyMap["s"].push(new KeyS(2, 21));

    keyMap["l"].push(new KeyL(1, 22.5));
    keyMap["colon"].push(new KeyColon(1, 23.5)); // Beat drop

    keyMap["a"].push(new KeyA(1, 24));
    keyMap["s"].push(new KeyS(1, 24.5));
    keyMap["l"].push(new KeyL(1, 25));
    keyMap["colon"].push(new KeyColon(1, 25.5));

    keyMap["a"].push(new KeyA(1, 26));
    keyMap["s"].push(new KeyS(1, 26.5));
    keyMap["l"].push(new KeyL(1, 27));
    keyMap["colon"].push(new KeyColon(1, 27.5));

    keyMap["a"].push(new KeyA(2, 28));
    keyMap["s"].push(new KeyS(2, 28));


    return [keyMap, audioTrack];
}

export default easy;