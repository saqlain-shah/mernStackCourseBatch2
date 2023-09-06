const person = {
  naam: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

const { naam, age, ...rest } = person;

console.log(naam); // 'John'
console.log(age); // 30
console.log(rest); // { city: 'New York', country: 'USA' }
