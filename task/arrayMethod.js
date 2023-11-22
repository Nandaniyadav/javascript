let cities = ["Lucknow", "Delhi", "Mumbai", "Hydrabaad", "Pune"];
// console.log(cities.push("Banglore")) //push()
// console.log(cities)
// console.log(cities.pop()); //pop()
// console.log(cities);
////////////   toString
// console.log(cities)
// console.log(cities.toString())

// console.log(cities);
// console.log(cities.slice(1, 3)); //slice()

///////////splice()
// console.log(cities);
// console.log(cities.splice(1, 2, "USA"));
// console.log(cities);

//////////////////////        task

// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Googe","IBM","Netflix"
// 1.Remove the first company from the array
// 2. Rimove Uber and Add Ola in its place
// 3. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Googe", "IBM", "Netflix"];
console.log(companies);
// console.log(companies.shift()) //answer of 1
// console.log(companies)

// console.log(companies.splice(2, 1, "Ola")); //answer of 2
// console.log(companies)

console.log(companies.push("Amazon"))  //answer of 3
console.log(companies)
