export default class Car{
    //Instanzvariable
    horsepower = 70;
    constructor(color, brand, country="Detuschland"){
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    printSpecification(){
        console.log(this.color + " " + this.brand + " " + this.horsepower + " " + this.country)
    }
}

let c1 = new Car("red", "Ferrari")
let c2 = new Car("blue", "BMW")
