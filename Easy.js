let firstNumber;
let secondNumber;
let question;
let quotient;
let answer;
let negOrPos;
let firstOneOrTwo;
let choice;
let correctGuesses = 0;
let counter = 0;
function generate() {
let operation = Math.floor(Math.random()*4);
if (operation === 0) {
        firstNumber = Math.floor(Math.random()*21);
        if (firstNumber > 10) {
            secondNumber = Math.floor(Math.random()*11);
        } else {
            secondNumber = Math.floor(Math.random()*21);
        }
        question = String(firstNumber) + " + " + String(secondNumber);
        answer = firstNumber + secondNumber;
    } else if (operation === 1) {
        firstNumber = Math.floor(Math.random()*21);
        if (firstNumber > 10) {
            secondNumber = Math.floor(Math.random()*11);
        } else {
            secondNumber = Math.floor(Math.random()*21);
        }
        question = String(firstNumber) + " - " + String(secondNumber);
        answer = firstNumber - secondNumber;
    } else if (operation === 2) {
        firstNumber = Math.floor(Math.random()*10);
        secondNumber = Math.floor(Math.random()*10);
        question = String(firstNumber) + " × " + String(secondNumber);
        answer = firstNumber * secondNumber;
    } else {
        do {
            secondNumber = Math.floor(Math.random()*9) + 1;
            answer = Math.floor(Math.random()*9) + 1;
            firstNumber = secondNumber * answer;
        } while (firstNumber > 99);
        question = String(firstNumber) + " ÷ " + String(secondNumber);
    }
    document.getElementById("question").innerHTML = question;
    let correct = Math.floor(Math.random()*3);
    if (correct === 0) {
        document.getElementById("buttonA").innerHTML = answer;
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonB").innerHTML = choice
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonC").innerHTML = choice
    } else if (correct === 1){
        document.getElementById("buttonB").innerHTML = answer;
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonA").innerHTML = choice
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonC").innerHTML = choice
    } else {
        document.getElementById("buttonC").innerHTML = answer;
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonA").innerHTML = choice
        do {
            negOrPos = Math.random() > 0.25 ? 1 : -1;
            choice = Math.floor((Math.random()*99) + 1) * negOrPos;
        } while (choice === answer);
        document.getElementById("buttonB").innerHTML = choice
    }
    return correct;
}
correct = generate();

function moveA() {
    if (correct === 0) {
        correctGuesses += 1;
    }
    if (counter >= 10) {
        stopGame();
        return
    }
    counter += 1;
    correct = generate();
    document.getElementById("correctGuesses").innerHTML = correctGuesses + "/10"
}

function moveB() {
    if (correct === 1) {
        correctGuesses += 1;
    }
    if (counter >= 10) {
        stopGame();
        return
    }
    counter += 1;
    correct = generate();
    document.getElementById("correctGuesses").innerHTML = correctGuesses + "/10";
}

function moveC() {
    if (correct === 2) {
        correctGuesses += 1;
    }
    if (counter >= 10) {
        stopGame();
        return
    }
    counter += 1;
    correct = generate();
    document.getElementById("correctGuesses").innerHTML = correctGuesses + "/10"
}

function stopGame() {
    document.getElementById("question").innerHTML = "GG";
    document.getElementById("question").style.fontWeight = "bold";
    document.getElementById("buttonB").onclick = newGame;
    document.getElementById("buttonB").innerHTML = "Play Again";
    document.getElementById("buttonA").style.display = "none";
    document.getElementById("buttonC").style.display = "none";
}

function newGame() {
    correct = generate();
    document.getElementById("buttonA").style.display = "inline-block";
    document.getElementById("buttonC").style.display = "inline-block";
    document.getElementById("question").style.fontWeight = "normal";
    document.getElementById("buttonB").onclick = moveB;
    counter = 0;
    correctGuesses = 0;
    document.getElementById("correctGuesses").innerHTML = correctGuesses + "/10"
}