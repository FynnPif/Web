currencyConversions = {
    currencies: [1.13, 1, 0.85]
}

    var givenNumber = document.getElementById("valueInput");
    var currentCurrency = document.getElementById("givenCurrency");
    var convertCurrency = document.getElementById("convertedCurrency");
    var convertedValue = givenNumber * currencyConversions.currencies[0]

    console.log(convertedValue)

document.getElementById("convert").value.addEventListener("click", function(){
    convertedValue;
});

//function convert1(){
    //console.log(givenNumber, currentCurrency, convertCurrency)
//}