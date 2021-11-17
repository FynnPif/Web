let randomNumber1 = Math.random(100) * 100;
let numberRound1 = Math.round(randomNumber1);

let randomNumber2 = Math.random(100) * 100;
let numberRound2 = Math.round(randomNumber2);

if (randomNumber1 < randomNumber2 && randomNumber1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

if (randomNumber1 < 30 || randomNumber2 < 30) {
    console.log("Eine der beiden ist kleiner als 30")
}

if (randomNumber1 < 50 && randomNumber2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}