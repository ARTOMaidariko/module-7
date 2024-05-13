function setFullName(){
  
}
const people = [
  {Name: "John", Age: 32},
  {Name: "Jane", Age: 25},
  {Name: "Bob", Age: 15},
];
const newAge = people.filter((num) => num.Age > 18)
console.log(newAge);
const newName = people.map((num) => num.Name);
console.log(newName);