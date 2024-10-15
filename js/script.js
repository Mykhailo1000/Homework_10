
//! Task 1

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Повідомлення номер ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Таймер зупинено.");
    }
}, 1000);

//! Task 2

const box = document.querySelector('.box');
let size = 50;
let position = 0;
const intervalId1 = setInterval(() => {
    size += 5;
    position += 5;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.transform = `translateX(${position}px)`;
    if (size > 100) {
        clearInterval(intervalId);
    }
}, 500);

//! Task 3

let score = 0;
const scoreElement = document.getElementById('score');
const target = document.querySelector('.target');

function moveTarget() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

target.addEventListener('click', () => {
    score++;
    scoreElement.innerText = score;
    moveTarget();
});

setInterval(moveTarget, 1000);
moveTarget();

//! Task 4 

document.getElementById('startButton').addEventListener('click', () => {
    const seconds = parseInt(document.getElementById('timeInput').value);
    if (isNaN(seconds) || seconds <= 0) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }
    setTimeout(() => {
        alert("Час вичерпано!");
    }, seconds * 1000);
});