let random = Math.random() * 1000;
let randomAsInt = Math.round(random);
console.log(randomAsInt);

if(randomAsInt > 800){
    console.log("größer als 800")
}

if(randomAsInt > 500 && randomAsInt < 800){
    console.log("zwischen 500 und 800")
}

if(randomAsInt > 200 && randomAsInt < 500){
    console.log("zwischen 200 und 500")
}
if(randomAsInt > 0 && randomAsInt < 200){
    console.log("zwischen 500 und 800")
}