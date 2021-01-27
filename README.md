# [KeyRevolution](https://alexarchibeque.github.io/KeyRevolution/)

Key Revolution is a game based off the popular rhythm game Dance Dance Revolution. 
It is a game where i practice my vanilla Javascript HTML and CSS with the idea being I use as little Libraries, api's or outside programs as possible.

### Technologies Used

For KeyRevolution, as stated above, I used vanilla Javascript, HTML5, and CSS as well as a couple ease of life technologies.

Those being: 

**Webpack**

**Babel**

**File-Loader**


## Start Screen

![alt-text](https://github.com/AlexArchibeque/KeyRevolution/blob/main/imgs/KeyRevFront.png "Playing the Game")

Loading the game a few things happen, including the loading of event listeners and the setting of the song plus its associated keymap. I just want to highlight the * * *easy.js* file and how that works.

``` js
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
```

    This sets up the arrays that will be used later and sent back to the main game to allow keys to flow down the screen.


``` js
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

```



![alt-text](https://github.com/AlexArchibeque/KeyRevolution/blob/main/imgs/PlayingGif.gif "Playing the Game")

PlayingGif

![alt-text](https://github.com/AlexArchibeque/KeyRevolution/blob/main/imgs/ButterCupRestart.png "Playing the Game")

ButterCupRestart