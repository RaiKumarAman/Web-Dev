let tea=["Cadamom Tea", "Lemon Tea", "Masala Tea", "Assam Tea"]

console.log(tea);

let cities= ["London", "Delhi", "Mumbai"];
cities.push("Sydney");
console.log(cities);

let hero=["Superman", "Batman", "Spiderman", "Homelander"]
hero.pop()
console.log(hero);

// Creating Soft Copy
let softCopyTea=tea;
console.log(softCopyTea);

tea.pop();
console.log(softCopyTea);

//Creating Hard Copy
let topcities=["London", "Paris", "Aukland", "Tokyo"];
let favcities=[...topcities];
console.log(favcities);

let europeanCities=["Paris", "Rome"]
let asianCities=["Tokyo", "Bangkok"]
let worldCities=[...europeanCities, ...asianCities]
console.log(worldCities);

let worldCities2=europeanCities.concat(asianCities);
console.log(worldCities2);

let teaMenu=["masala chai", "oolang tea", "green tea", "earl grey"];
console.log(teaMenu.length);

let cityBucketList=['Kyoto', 'London', 'Cape Town', 'Vancouver'];
isLondonInList=cityBucketList.includes("London");
console.log(isLondonInList);
