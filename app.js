const amaunt = document.querySelector("#amaunt");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");

const convertion = new Convertor("USD","TRY");
const ui = new UI(firstCurrency,secondCurrency);



eventListeners();


function eventListeners(){
    amaunt.addEventListener("input", convertCurrency);

    firstCurrency.onchange = function(){
        convertion.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeoutputFirst();
        convertCurrency();
    }

    secondCurrency.onchange = function(){
        convertion.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent); 
        ui.changeoutputSecond();
        convertCurrency();

    }
}

function convertCurrency(){
    convertion.changeAmaunt(amaunt.value);

    convertion.Convertion()
    .then(response => {
        ui.displayResult(response);
    })
    .catch(err=>console.log(err));


}

