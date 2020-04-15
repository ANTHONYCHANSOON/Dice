var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);


console.log("player 1 = " + randomNumber1);
console.log("player 2 = " + randomNumber2);

if (randomNumber1 === randomNumber2) {
    console.log("TIE! Refresh page");
    document.querySelector("h1").innerText = "TIE";
} else if (randomNumber1 > randomNumber2) {
    console.log("Player 1 Win");
    document.querySelector("h1").innerText = "PLAYER 1 WIN";
} else {
    console.log("Player 2 Win");
    document.querySelector("h1").innerText = "PLAYER 2 WIN";
}

function changeDice(diceNumber1, diceNumber2) {
    if (diceNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (diceNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (diceNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (diceNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (diceNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else if (diceNumber1 === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    if (diceNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (diceNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (diceNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (diceNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (diceNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else if (diceNumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}


changeDice(randomNumber1, randomNumber2);