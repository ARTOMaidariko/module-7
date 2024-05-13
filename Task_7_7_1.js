const person = {
    name: "Artem",
    Age: 24
  };
  function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.Age}"`);
  }
  printInfo.call(person);
  