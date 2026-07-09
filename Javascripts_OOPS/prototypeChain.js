function Animal(type){
    this.type=type;
}

Animal.prototype.sound=function(){
    console.log(`${this.type} is making weird sound`);
}

let animal1= new Animal("Dog");
// animal1.sound()
// console.log(animal1.type);


// Already existing class(liek String or Array)
String.prototype.walk=function(){
    console.log(`${this} is walking like animal`);
}

let animal2="Elephant";
animal2.walk();