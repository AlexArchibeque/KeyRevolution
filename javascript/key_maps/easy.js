import Key from '../keys'
import defaultImage from '../../imgs/Alexzander_Archibeque.jpg';


function easy() {
    let keyMapObj = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, 0));
    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, -40));
    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, -80));

    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -100));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -140));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -180));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -190));

    keyMapObj["l"].push(new Key(defaultImage, 80, 80, 820, -120));
    keyMapObj["l"].push(new Key(defaultImage, 80, 80, 820, -130));

    keyMapObj["colon"].push(new Key(defaultImage, 80, 80, 910, -220));
    keyMapObj["colon"].push(new Key(defaultImage, 80, 80, 910, -240));

    return keyMapObj;
}

export default easy;