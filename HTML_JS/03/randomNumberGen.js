function generate(){
    let num1 = document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;

    let amountOfRandomNums = parseInt(num2) - parseInt(num1) + 1;
    let random = Math.floor(Math.random()*amountOfRandomNums) + parseInt(num1);

    document.getElementById("randomNumber").innerHTML = random;
}