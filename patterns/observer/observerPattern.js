// Here we use 'observerPattern' to update information ondifferent observers
// I took Stock and trading as an example. When the coin's price updates, the future's and spot's trading
// update its price as well.


class Stock{
    constructor(symbol, price){
        this.symbol = symbol;
        this.price = price;
        this.observers = [];
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer){
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    updatePrice(newPrice){
        this.price = newPrice;
        this.notifyObservers();
    }

    notifyObservers(){
        this.observers.forEach((observer) => observer.update(this));
    }
}

class StockObserver{
    update(stock){
        console.log(`Price of ${stock.symbol} is now ${stock.price}`);
    }
}

const stock = new Stock('AAPL', 150);
const observer1 = new StockObserver();
const observer2 = new StockObserver();

stock.addObserver(observer1);
stock.addObserver(observer2);

stock.updatePrice(155);