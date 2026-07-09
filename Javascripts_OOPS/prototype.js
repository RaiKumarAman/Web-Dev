let computer={
    cpu:12
};

console.log(computer.__proto__);

let car={tyres:4};
let tesla={driver:"AI"};

Object.setPrototypeOf(tesla,car);
console.log(Object.getPrototypeOf(tesla));
console.log(Object.hasOwn(tesla));f