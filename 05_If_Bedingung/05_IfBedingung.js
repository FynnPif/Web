//Aufgabe 1
console.log("Aufgabe 1")

let randomNumber1 = Math.random() * 100;
let numberRound1 = Math.round(randomNumber1);

console.log("The number is: " + numberRound1)

if (numberRound1 < 20) {
    console.log("Mini")
}
if (numberRound1 > 19 && numberRound1 < 51) {
    console.log("Medium")
}
if (numberRound1 > 50) {
    console.log("Large")
}


//Aufgabe 2
console.log("Aufgabe 2")

let randomNumber2 = Math.random() * 100;
let numberRound2 = Math.round(randomNumber2);

console.log("The number is: " + numberRound2)

if (numberRound2 <= 7) {
    console.log("Mini")
}
if (numberRound2 > 7 && numberRound2 < 91) {
    console.log("Medium")
}
if (numberRound2 >= 90) {
    console.log("Large")
}
