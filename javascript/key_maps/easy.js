import Key from '../keys'
import defaultImage from '../../imgs/Alexzander_Archibeque.jpg';


function easy() {
    let keyMapObj = {
        a:[], s:[], d:[], f:[],

        j:[], k:[], l:[], colon:[],

        space:[]
    };

    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, 0));
    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, -70));
    keyMapObj["a"].push(new Key(defaultImage, 80, 80, 10, -140));

    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -100));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -140));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -240));
    keyMapObj["s"].push(new Key(defaultImage, 80, 80, 100, -290));

    keyMapObj["l"].push(new Key(defaultImage, 80, 80, 820, -120));
    keyMapObj["l"].push(new Key(defaultImage, 80, 80, 820, -180));

    keyMapObj["colon"].push(new Key(defaultImage, 80, 80, 910, -220));
    keyMapObj["colon"].push(new Key(defaultImage, 80, 80, 910, -280));

    return keyMapObj;
}

export default easy;