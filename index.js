
let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.ceil(randomNumber1);
console.log(randomNumber1);

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.ceil(randomNumber2);
console.log(randomNumber2);


let p1 = document.getElementsByClassName("img1")[0];
p1.setAttribute('src', `./images/dice${randomNumber1}.png`);

let p2 = document.getElementsByClassName("img2")[0];
p2.setAttribute('src', `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "<h1>🚩Player 1 Wins</h1>";
} else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "<h1>Player 2 Wins🚩</h1>";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "<h1>Draw</h1>";
}