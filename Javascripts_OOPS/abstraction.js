class CoffeeMachine{

    start(){
        // Some shit
        return "Starting..."
    }

    Brew(){
        // Some Coffee brewing code
        return "Brewing your Coffee"
    }

    pressStart(){
        return this.start() + this.Brew()

    }
}

let c1= new CoffeeMachine();
console.log(c1.pressStart());


