class Convertor {
    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.api = "https://api.exchangeratesapi.io/latest?base=";
        this.amaunt =  null ; 
    }
    Convertion(){
        return new Promise((resolve,reject) => {

            fetch(this.api + this.firstCurrency)
            .then(result => result.json())
            .then(data =>{
                const myRates = data["rates"][this.secondCurrency];
                const amaunt2 = Number(this.amaunt);

                let total = myRates * amaunt2;
                resolve(total);

            })
            .catch(err => reject(err))

        });
    }
        

    changeAmaunt(amaunt){
        this.amaunt = amaunt;
    }
    changeFirstCurrency(newfirstCurrency){
        this.firstCurrency = newfirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
    

}