class UI {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;


        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");
    }

    changeoutputFirst(){
        this.outputFirst.textContent = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent ;

    }

    changeoutputSecond(){
        this.outputSecond.textContent = this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent ;

    }
    displayResult(result){
        this.outputResult.value = result ;
    }
}