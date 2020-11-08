import {KeyA,KeyS,KeyColon,KeyL} from './keys'
import defaultImage from '../../imgs/Alexzander_Archibeque.jpg';
// import audioFile from '../../songs/buttercup.mp3'
const PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));


function easy() {
    let audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);
    
    let keyMapObj = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    keyMapObj["a"].push(new KeyA(defaultImage, 0));
    keyMapObj["a"].push(new KeyA(defaultImage, -70));
    keyMapObj["a"].push(new KeyA(defaultImage, -140));

    keyMapObj["s"].push(new KeyS(defaultImage, -100));
    keyMapObj["s"].push(new KeyS(defaultImage, -140));
    keyMapObj["s"].push(new KeyS(defaultImage, -240));
    keyMapObj["s"].push(new KeyS(defaultImage, -290));

    keyMapObj["l"].push(new KeyL(defaultImage, -120));
    keyMapObj["l"].push(new KeyL(defaultImage, -180));

    keyMapObj["colon"].push(new KeyColon(defaultImage, -220));
    keyMapObj["colon"].push(new KeyColon(defaultImage, -280));


    return [keyMapObj, audioTrack];
}

export default easy;