function calculate(){
    let size = document.getElementById("field1").value;
    let weight = document.getElementById("field2").value;

    let result = ((size * 1.43)/weight) - 3.4;
    
    if(result == 0){
        document.getElementById("input").innerHTML = "Null"
    }else if(result > 0){
        document.getElementById("input").innerHTML = "Positv"
    }
    else if(result < 0){
        document.getElementById("input").innerHTML = "Negativ"
    }

    if (result == 4){
        document.getElementById("input").innerHTML = "Positiv <br> 0,1,2,3,4"
    }
    if (result == -2){
        document.getElementById("input").innerHTML = "Negativ <br> 0,-1,-2"
    }
}