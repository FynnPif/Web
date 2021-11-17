//Aufgabe 1
document.write("Aufgabe 1" + "<br>");

for (i = 1; i < 5; i++){
    if (i % 2){
        for(x=0; x < 4; x++){
            document.write("X ")
        }
        document.write("<br>");
    
    } else {
        for(o=0; o < 4; o++){
            document.write("O ")
        }
        document.write("<br>");
    }
}

//Aufgabe 2
document.write("Aufgabe 2" + "<br>");
var sum_i = 0
for (i = 1; i < 101; i++){
    if(i % 2 == 0){
        sum_i += i
    }
}
document.write(sum_i);

//Aufgabe 3
