const buttoncolors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let userChoice = 0;

function nextSequence() {
    level ++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttoncolors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    userClickedPattern = [];
    userChoice = 0;
}

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userChoice);
    userChoice ++;
});

$(document).keydown(function() {
    if (level === 0) {
        nextSequence();
    }
});

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
      $("#" + color).removeClass("pressed");
    }, 100);
}

function playSound (color) {
switch (color) {
    case "red":
        const red = new Audio("./sounds/red.mp3");
        red.play();
    break;
    case "blue":
        const blue = new Audio("./sounds/blue.mp3");
        blue.play();
    break;
    case "green":
        const green = new Audio("./sounds/green.mp3");
        green.play();
    break;
    case "yellow":
        const yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
    break;

    default:
        break;
}
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        const wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(document).keydown(function() {
            startOver();
            nextSequence();
        });
    }
}

function startOver() {
gamePattern = [];
userClickedPattern = [];
level = 0;
userChoice = 0;
}