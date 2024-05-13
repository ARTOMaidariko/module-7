const people = [
    {Name: "John", Age: 32},
    {Name: "Jane", Age: 25},
    {Name: "Bob", Age: 15},
  ];
  function setFullName(fullName){
    this.fullName = fullName;
  }
  const setPersonFullName = setFullName.bind(people[0]);
  setPersonFullName("Jonh Wick");
  console.log(people);