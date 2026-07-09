function Person(name,age){
    this.name=name;
    this.age=age;
    this.describe=function (){
        console.log(`${this.name} is ${this.age} years old`);
        if(this.age>=60){
            console.log("He should reire");
        }
        else{
            console.log("He should not retire");
            
        }
    }
   
}

//Object created
let person1= new Person("Aman", "23");
person1.describe();

