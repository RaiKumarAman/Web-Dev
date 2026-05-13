// Sum of numbers from 1 to 5
num=0;
sum=0;
while(num<=5){
    sum+=num;
    num++;
}
console.log(sum);

// do while loop, prompt user to enter their fav tea type until they enter "stop".

// let teaCollection=[];
// let key;
// console.log("Enter you fav tea or stop to exit:")
// do{
//     let key= prompt("Tea Name: ");
//     teaCollection.push(key);
// }while(key!="stop");
// teaCollection.pop();
// console.log(teaCollection);

// for loop, multiplies each element in the array by 2 and store the resukt in a new array named  multipiedNumbers.
let arr=[2,4,6];
let multipiedNumbers=[];
for (let i=0; i<arr.length;i++){
    multipiedNumbers.push(arr[i]*2);

}
console.log(multipiedNumbers);

// loop through array of tea names and stop when chai is found, store all tea before chai in a new array.

let tea=["black tea", "green tea", "chai", "oolong tea"]
let selectedtea=[];

for(let i=0; i< tea.length; i++){
    if(tea[i]=="chai"){
        break;
    }
    selectedtea.push(tea[i]);
}
console.log(selectedtea);

// loops through the array and skips the "Paris", Store the other cities in an new array
city=["London", "New York", "Paris", "Berlin"];
visitedCities=[];
for(let i=0; i< city.length; i++){
    if(city[i]=="Paris"){
        continue;
    }
    visitedCities.push(city[i]);    
}
console.log(visitedCities);

let citiespopulation={
    "London":890000,
    "New York": 840000,
    "Paris": 220000,
    "Berlin": 350000
};
let citypopulation=[]
for(let i in citiespopulation){
    // console.log(citiespopulation[i]);
    if (i==="Berlin"){
        break;
    }
    citypopulation.push(citiespopulation[i]);
}
console.log(citypopulation);