
/*
(Easy)Task 2: Objects
Create an object person with properties: name, age, and address (which is another object with street and city).
Log the name and street properties to the console.*/

let person = {
  name: "Alpha",
  age: 20,
  address: {
      street: "Wossen Main St",
      city: "Addis Ababa City"
  }
};

console.log(person);

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Street: ${person.address.street}`);
console.log(`City: ${person.address.city}`);