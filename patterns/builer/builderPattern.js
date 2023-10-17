//Here we create a constructor for a car, so we don't need to create new class every time we have a new car. We just 
//write the info about this car in one line and construct it easily


class Car{
    constructor(){
        this.model = '';
        this.color = '';
        this.year = '';
        this.design = '';
    }
}

class CarBuilder{
    constructor(){
        this.car = new Car();
    }

    setModel(model){
        this.car.model = model;
        return this;
    }

    setColor(color){
        this.car.color = color;
        return this;
    }

    setYear(year){
        this.car.year = year;
        return this;
    }

    setDesign(design){
        this.car.design = design;
        return this;
    }

    build(){
        return this.car;
    }
}
const carBuilder = new CarBuilder();

const maseratiLevante2016 = carBuilder.setModel('Maserati').setColor('White').setYear('2016').setDesign('lightweight').build();
const mercedes_benzSprinter2021 = carBuilder.setModel('Mercedes-Benz').setColor('Grey').setYear('2021').setDesign('truck').build();


console.log(maseratiLevante2016);
console.log(mercedes_benzSprinter2021);