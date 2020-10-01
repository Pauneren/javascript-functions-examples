//function declaration






//this function will add or multiply 2 numbers
function calculate(action, number1, number2){
    if (action ==='add'){
      return number1 + number2
    }
    else if (action === 'multiply'){
      return number1 * number2
    }
    else {
      //THE $ DOES NOT GO HERE
      return `The action ${action} is unkown.`
    }
  }
  
  console.log(calculate('add', 2, 3))
  console.log(calculate ('multiply', 2,3))
  console.log(calculate ('divide', 2,3))
  
  //function declaration
  //you can call the function before is declared
  //this is calle HOISTING
  walk();
  //this is called hoisting
  //the js engine moves the function declaration to the top
  function walk() {
    console.log ('walk')
  }
  
  //aNONYMOUS function expression
  let run = function() {
    console.log('run')
  };
  let move = run;
  run();
  move();
  
  //NaN
  function sum (a, b) {
  return a+ b; //1 + undefined
  }
  console.log(sum(1));
  
  //to pass as many as arguments as I want and get a result:
  function sum () {
    let total = 0;
    for (let value of arguments)
    total += value;
    return total;
  
  }
  console.log(sum(1,2,7,9,10,77))
  
  //the restoperator (...args) 
  //When we want to pass many arguments the rest operator will put them all in an array
  function sum (...args) {
    console.log(args)
  }
  console.log(sum(1,2,3,4,5,6,7,89));
  
  //The reduce method
  function sum (...args) {
    return args.reduce((a, b) => a + b);
  }
  console.log(sum(1,2,3,4,5,6,7,89));
  
  //use the function above to calculate the total cost of items in a shopping cart, with a discount factor
  //arrow functions
  function add(discount, ...prices){//prices here is the rest parameter
    const total = prices.reduce ((a,b) => a + b);
    return total * (1 - discount);
  }
  console.log(add(0.1, 20, 30));
  //the discount of 10% of 50 is 45
  
  
  //Default parameters
  //calculate interest ex:
  function interest (proncipal, rate, years) {
    return proncipal * rate / 100 * years;
  }
  console.log(interest(10000, 3.5, 5))
  //the retun should be 1750
  
  //same functin with default values
  function interest (proncipal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return proncipal * rate / 100 * years;
  }
  console.log(interest(10000, 3.5, 5))
  
  //same functin with default values
  function interest (proncipal, rate = 3.5, years = 5) {
    
    return proncipal * rate / 100 * years;
  }
  console.log(interest(10000, 3.5, 5))
  
  
  
  //CALL A PERSON FULL NAME
  //a functin inside a function
  const person = {
   firstName: 'Paula',
   lastName: 'Nerenberg',
   fullName() {
     return `${person.firstName} ${person.lastName}`;
   }
  }
  console.log(person.fullName());
  
  
  
  
  
  
  //GETTERS AND SETTERS
  //getters to access properties in an object
  const persona = {
    firstName: 'Paula',
    lastName: 'Nerenberg',
    
    get fullNames() {
      return `${persona.firstName} ${persona.lastName}`
    },
    
    set fullNames(value) {
        const parts = value.split (' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  persona.fullNames = 'John Smith';
  console.log(persona);
  
  
  
  //use the function to display the name of the person
  function greet(name) {
    console.log ('Hello' + name);
  }
  greet('Paula')
  
  //PERFORMING A TASK: to display something on the console
  //function to greet
  function sayHello(nombre, apellido) {
    //define the nombre
    console.log('Hello ' + nombre + ' ' + apellido);
  }
  sayHello('Paula', 'Nerenberg');
  sayHello('Ægir', 'Sveinsson');
  
  
  
  //function that calculates a value:
  //calculate the square number of 2
  function square(number) {
    return number * number;
  }
  
  let number = square(2);
  console.log(number);
  
  //or
  function square(number) {
    return number * number;
  }
  
  console.log(square(2));
  
  //catching an error 
  //I f person did not put a first name in the value
  const persona1 = {
    nombre: 'Paula',
    apellido: 'Nerenberg',
  
  
  set nombreCompleto(value) {
    if (typeof value !=='string')
    throw new Error('value id not a string');
  
    const parts = value.split(' ');
    if (parts.length !==2)
    throw new Error('Enter a first and last name.');
  
    this.firstName = parts [0];
    this.lastName = parts [1];
  }
  };
  try {
    persona1.nombreCompleto = null;
  }
  catch (e) {
    alert(e);
  }
  console.log(persona1);