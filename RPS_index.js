imgOne = document.getElementsByClassName("img1")[0];
imgTwo = document.getElementsByClassName("img2")[0];
randomNumberOne = Math.floor(Math.random()*3)+1;
randomNumberTwo = Math.floor(Math.random()*3)+1;
randomImageOne = "images/"+randomNumberOne+".jpg";
randomImageTwo = "images/"+randomNumberTwo+".jpg";
imgOne.setAttribute('src',randomImageOne);
imgTwo.setAttribute('src',randomImageTwo);

if (randomNumberOne === 3 && randomNumberTwo === 1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else if (randomNumberOne === 1 && randomNumberTwo === 3) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumberOne === 2 && randomNumberTwo === 1) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumberOne === 1 && randomNumberTwo === 2) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else if (randomNumberOne === 3 && randomNumberTwo === 2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumberOne === 2 && randomNumberTwo === 3) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}