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

Loading the game a few things happen, including the loading of event listeners and the setting of the song plus its associated keymap. I just want to highlight the easy.js file and how that works.

```js
    let audioTrack;

    let a = [];
    let d = [];
    let f = [];
    let s = []; 
    
    if(song === "Buttercup"){
        audioTrack = new Audio(`${PATH}/songs/buttercup.mp3`);

        a = [210, 529, 917, 1162, 1401, 1999, 2061, 
            2661, 2838, 3320, 3797, 4216, 4399]

        d = [322, 798, 981, 1222, 1579, 1879, 2183, 
            2360, 2420, 2599, 2901, 2991, 3380, 3470, 3917, 4100, 4280, 4518]

        f = [380, 504, 859, 1044, 1283, 1641, 1761, 1879, 
            2241, 2299, 2360, 2479, 2962, 3442, 3981, 4038, 4400]

        s = [265, 439, 624, 918, 1101, 1340, 1402, 1700, 1940, 
            2121, 2539, 2871, 3021, 3348, 3500, 3858, 4159, 4280, 4518]
```

This sets up the arrays that will be used later and sent back to the main game to allow keys to flow down the screen.

A cool fact about these numbers are that they were made with the help of event listeners and pulling the information with dev tools console log save function.


```js
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

Each key is then made into a custom Key class that calculates the position of where to put the key on the screen.

```js
    return [keyMap, audioTrack, (a.length + d.length + f.length + s.length)];
```

Everything gets returned in the end.


![alt-text](https://github.com/AlexArchibeque/KeyRevolution/blob/main/imgs/PlayingGif.gif "Playing the Game")

The meat and bones of the game, as some would say, works fairly simply. The calculations used previously for setting each key at a specific Y position is now taken and used in the HTML canvas element.

``` js
    handleKey(button, key){

        // Handles if there are no keys left.
        this.handleKeyAnimation(button)
        if(this.keys[key].length === 0){
            return;
        }

        let gameCanvas = document.getElementById("game-canvas").getBoundingClientRect();
        let currentButton = document.getElementById(button).getBoundingClientRect();

        // Grabs Y position of button 
        // subtracts half the height of the current button in order to get the middle.
        let buttonY = currentButton.top - gameCanvas.top - (currentButton.height/2)

        // Grabs Y position of first in line key falling down the screen.
        let firstKey = this.keys[key][this.keys[key].length - 1]
        // Takes Y Position of current key, adds frameCount to it to get the relative position.
        // Then adds the total height of the key and divides by 2 to get the middle of the element
        let keyY = firstKey.posY + this.frameCount + (firstKey.height/2)
        
        // Calculates if button is close enough to removed/counted etc
        this.handleKeyAlignmentCollision(keyY, buttonY, key);
    }
```

This function gets called everytime a Key (A, S, D, F) is pressed.

![alt-text](https://github.com/AlexArchibeque/KeyRevolution/blob/main/imgs/ButterCupRestart.png "Playing the Game")

Clicking on any of the difficulty or songs color coded buttons at the top will reset your game and set the song to whichever song you want and the difficulty for whatever song you're on. With the use of modals it gives a quick refresh/pause before asking if you want to continue playing.

It does this by running the setKeyMap function [Here](https://github.com/AlexArchibeque/KeyRevolution/blob/aa2523fd3c3025df08e50f6dcf9a41fdf592194d/javascript/game.js#L157)

```js
    this.frameCount = 0
    this.numScore = {
        perfect:0,
        ok: 0,
        bad: 0,
        total: 0
    };

    this.streak = 0;

    this.score = {
        perfect:0,
        ok:0,
        bad:0,
        missed: 0
    }

```

Resetting of the games frameCount allowing for a complete restart, as well as the scores that show and total number of keys pressed for each type.


```js
    if(difficulty === "easy"){
        let easyArr = easy(this.songName);
        this.keys = easyArr[0];
        this.audio = easyArr[1];
        this.audio.volume = this.audioVolume
        this.total = easyArr[2];

        this.currentKeyMap = "easy";
    }else if(difficulty === "medium"){
        let mediumArr = medium(this.songName);
        this.keys = mediumArr[0];
        this.audio = mediumArr[1];
        this.audio.volume = this.audioVolume
        this.total = mediumArr[2];
        

        this.currentKeyMap = "medium"
```

Simple if/else statements to get the information needed and setting it in the program to use later.


