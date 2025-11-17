var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var paused = false;
var idTrack = null;
var buttonScale = 1;

function loadContent() {
    dataLoad();
    displayMessage();
}

function dataLoad() {
    var temp = localStorage.getItem('highScore');
    if (temp != null) {
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;

    // 🔴 Change score color when > 20
    if (current > 20) {
        currentScore.style.color = "red";
    } else {
        currentScore.style.color = "white";
    }
}

function statuMsg(msg) {
    statusMessage.textContent = msg;
}

function endGame() {
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = true;

    // 🧮 Show Clicks Per Second (CPS)
    let cps = (current / 10).toFixed(2);
    statuMsg(`Game Over! You clicked ${cps} times per second 🧠`);

    // 🥳 Confetti effect
    if (current > high) {
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        document.body.style.background = "gold";
        setTimeout(() => (document.body.style.background = ""), 1000);
        alert("🎉 New High Score! Great job!");
    } else {
        alert("😕 Try again to beat your high score!");
    }

    // 🎮 Change Start button text
    startButton.innerText = "Play Again";
}

function startGame() {
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    buttonScale = 1;
    clickButton.style.transform = "scale(1)";
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    statuMsg("🚀 Game started! Click as fast as you can!");
    displayMessage();

    clearInterval(idTrack);
    idTrack = setInterval(function () {
        if (!paused) {
            time1--;
            displayMessage();
            if (time1 <= 0) {
                endGame();
            }
        }
    }, 1000);
}

function clickMe() {
    if (track && !paused) {
        current++;
        displayMessage();

        // 🔺 Grow the button slightly per click
        buttonScale = Math.min(buttonScale + 0.1, 2);
        clickButton.style.transform = `scale(${buttonScale})`;

        // Reset to smaller size gradually
        setTimeout(() => {
            buttonScale = Math.max(1, buttonScale - 0.05);
            clickButton.style.transform = `scale(${buttonScale})`;
        }, 150);
    }
}

function pauseGame() {
    if (track && !paused) {
        paused = true;
        clickButton.disabled = true;
        pauseButton.disabled = true;
        resumeButton.disabled = false;
        statuMsg("⏸️ Game paused!");
    }
}

function resumeGame() {
    if (track && paused) {
        paused = false;
        clickButton.disabled = false;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
        statuMsg("▶️ Game resumed! Keep clicking!");
    }
}

function resetGame() {
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game reset. Ready for a fresh start!");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    startButton.innerText = "Start Game";
    
}


var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var paused = false;
var idTrack = null;
var buttonScale = 1;

function loadContent() {
    dataLoad();
    displayMessage();
}

function dataLoad() {
    var temp = localStorage.getItem('highScore');
    if (temp != null) {
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;

    // 🔴 Change score color when > 20
    if (current > 20) {
        currentScore.style.color = "red";
    } else {
        currentScore.style.color = "white";
    }
}

function statuMsg(msg) {
    statusMessage.textContent = msg;
}

function endGame() {
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = true;

    // 🧮 Show Clicks Per Second (CPS)
    let cps = (current / 10).toFixed(2);
    statuMsg(`Game Over! You clicked ${cps} times per second 🧠`);

    // 🥳 Confetti effect
    if (current > high) {
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        document.body.style.background = "gold";
        setTimeout(() => (document.body.style.background = ""), 1000);
        alert("🎉 New High Score! Great job!");
    } else {
        alert("😕 Try again to beat your high score!");
    }

    // 🎮 Change Start button text
    startButton.innerText = "Play Again";
}

function startGame() {
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    buttonScale = 1;
    clickButton.style.transform = "scale(1)";
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    statuMsg("🚀 Game started! Click as fast as you can!");
    displayMessage();

    clearInterval(idTrack);
    idTrack = setInterval(function () {
        if (!paused) {
            time1--;
            displayMessage();
            if (time1 <= 0) {
                endGame();
            }
        }
    }, 1000);
}

function clickMe() {
    if (track && !paused) {
        current++;
        displayMessage();

        // 🔺 Grow the button slightly per click
        buttonScale = Math.min(buttonScale + 0.1, 2);
        clickButton.style.transform = `scale(${buttonScale})`;

        // Reset to smaller size gradually
        setTimeout(() => {
            buttonScale = Math.max(1, buttonScale - 0.05);
            clickButton.style.transform = `scale(${buttonScale})`;
        }, 150);
    }
}

function pauseGame() {
    if (track && !paused) {
        paused = true;
        clickButton.disabled = true;
        pauseButton.disabled = true;
        resumeButton.disabled = false;
        statuMsg("⏸️ Game paused!");
    }
}

function resumeGame() {
    if (track && paused) {
        paused = false;
        clickButton.disabled = false;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
        statuMsg("▶️ Game resumed! Keep clicking!");
    }
}

function resetGame() {
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game reset. Ready for a fresh start!");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    startButton.innerText = "Start Game";
   
    // Reset button size
    resetClickButtonSize();
};

function resetClickButtonSize() {
    const clickBtn = document.getElementById("clickButton");

    clickBtn.style.padding = "30px";
    clickBtn.style.fontSize = "1.8em";
    clickBtn.style.transform = "none";
}


startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
resetButton.addEventListener('click', resetGame);

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
resetButton.addEventListener('click', resetGame);