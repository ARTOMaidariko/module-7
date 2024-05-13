function calculator(a,b,operation){
    if(operation === "+"){
      return a + b
    }else if(operation === "-"){
      return a - b;
    }else if(operation === "*"){
      return a * b;
    }else if (operation === "/"){
      return a / b;
    }else{
      console.log("Ошибка");
    }
  }
  const array = [2,3,"+"];
  const sum = calculator.apply(null,array);
  console.log(sum);