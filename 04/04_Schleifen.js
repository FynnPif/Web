// Zähle von 7 bis 45
for(count = 7; count < 46; count++){
    console.log(count)
}

// Zähle von 9 bis 99
for(count = 9; count < 100; count++){
    console.log(count)
}

// Zähle rückwärts von 10 bis 0
for(count = 10; count > -1; count--){
    console.log(count)
}

// Zähle rückwärts von 1234 bis 1207
for(count = 1234; count > 1206; count--){
    console.log(count)
}

// Gib Deinen Namen genau 8 mal aus
for(x = 0; x < 8;x++){
    console.log("Fynn")
}
//Zähle von 0 auf 10, dann gib 
//deinen Namen aus, dann zähle von 10 auf 0

for (let x = 0; x < 11; x++) {
    console.log(x);
    if(x == 10){
        console.log("Fynn");
        for (let y = 10; y > -1; y--) {
            console.log(y);
        }
    }
}