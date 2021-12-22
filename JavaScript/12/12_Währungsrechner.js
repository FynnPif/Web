const currencyConversions = [
    {"conversion": 1.13},
    {"conversion": 1},
    {"conversion": 1.33}
]
    function convert(){
        var givenNumber = document.getElementById("valueInput").value;
        var currentCurrency = currencyConversions[document.getElementById("givenCurrency").value];
        var convertCurrency = currencyConversions[document.getElementById("inputCurrency").value];
        var convertedValue = 0;

        if (currentCurrency == convertCurrency){
            convertedValue = givenNumber
        }

        convertedValue = Math.round((currentCurrency.conversion * givenNumber)*100)/100;

        document.getElementById("output").innerHTML = convertedValue;
    }    
