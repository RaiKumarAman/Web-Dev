// Object

let user={
    firstname:"Thor",
    lastname:"Odinson",
    isworthy:true
};

console.log(user.firstname);

user.isworthy=false;
console.log(user.isworthy);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));


// Array
let hero=["Ironman", "Thor", "Captain America"]
console.log(hero[1]);

let other=["steve", false, 70];
console.log(other[0]);
console.log(other[1]);
console.log(other[2]);

console.log(other[1]+2);
