var banana = "Banane";
var apple = "Apple";

var bananaPricePerKilo = 2.14;
var applePricePerKilo = 3.43;

var bananaAvgWeight = 0.22;
var appleAvgWeight = 0.34;

var bananaPerKil = 1 / bananaAvgWeight ;
bananaPerKil = bananaPerKil.toFixed(2);

var applePerKil = 1 / appleAvgWeight;
applePerKil = applePerKil.toFixed(2);

var bananaPrice = bananaPricePerKilo / bananaPerKil;
bananaPrice = bananaPrice.toFixed(2);

var applePrice =applePricePerKilo / applePerKil ;
applePrice = applePrice.toFixed(2);

function priceOfApples(amount){
    priceFixed = amount * applePrice;
    priceFixed = priceFixed.toFixed(2)
        console.log( "Der Preis von " + amount + " Äpfel ist " +  priceFixed)
}

function priceOfBanana (amount){
    priceFixed = amount * bananaPrice;
    priceFixed = priceFixed.toFixed(2);
        console.log("Der Preis von " + amount + " Äpfel ist " + priceFixed)
}

console.log("1 Kilo bananen sind " + bananaPerKil + " und 1 Kilo Äpfel sind " + applePerKil + ". Der Preis einer Banane ist " + bananaPrice + " und der Preis eines Apfels ist " + applePrice)

priceOfApples(10);
priceOfBanana(17);
priceOfApples(1000);
priceOfBanana(1000);