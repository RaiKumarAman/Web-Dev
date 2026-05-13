function greet(name){
    console.log("Hello "+name);
}

greet("Aman");

function makeTea(type){
    return `Making ${type} for you. Please Wait`;
}

console.log(makeTea("Green Tea"));

// Create a function that takes one teatype as Parameter. Inside this function, create another function named confirm order that returns a message like order confirmed for Chai, call confirm order from within orderTea and return the result 


function orderTea(type){
    function confirmOrder(){
    return "Order Confirmed for chai";
    }
    return confirmOrder()
}

console.log(orderTea("chai"));


// Arrow Functions
const calculateTotal=(num1, num2) =>{ return num1+num2;}
totalcost=calculateTotal(2,3);
console.log(totalcost);

 