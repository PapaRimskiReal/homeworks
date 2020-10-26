/*
    1. Write two binary functions, add and mul, that take two numbers and return their sum and product. 

    add(3, 4);    //  7  
    mul(3, 4);    // 12
    
   
*/

// Your code here:

  function add(a,b) {
    return a+b;
  }

  function mul(a,b) {
    return a*b;
  }

console.log("'1'- " + add(3, 4));
console.log("'1'- " + mul(3, 4));


/*
    2. Write a function that takes an argument and returns a function that returns that argument.  

    const idf = identify(3);
    idf();    // 3
*/

  function identify(arg){
   return () => {
      return arg;
    };
  }

  const idf = identify(3);
  console.log("'2'- " + idf());

/*
    3. Write a function addf that adds from two invocations.
    
    addf(3)(4);    // 7
*/
  function addf(a) {
    return (b) => {
      return a + b;
    };
  }

  console.log("'3'- " + addf(3)(5));


/*
    4. Write a function that takes a binary function, and makes it callable with two invocations.
    
    const addf = applyf(add);
    addf(3)(4);           // 7
    applyf(mul)(5)(6);    // 30
*/

  function applyf(action){
    return (a) => {
     return (b) => {
        return action(a,b);
      };
    };
    }

    const addf2 = applyf(add);

    console.log("'4'- " + addf2(3)(4)); 
    console.log("'4'- " + applyf(mul)(5)(6));
    

/*
    5. Write a function that takes a function and an argument, and returns a function that can supply a second argument.  

    const add3 = curry(add, 3);  
    add3(4);             // 7  
    curry(mul, 5)(6);    // 30  
    
    
*/

function curry(value, a){
      return (b) => {
        return value(a, b);
      };
    }

    const add3 = curry(add, 3);  
    console.log("'5'- " + add3(4));             // 7  
    console.log("'5'- " + curry(mul, 5)(6));

/*
    6. Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.
    
    const double = twice(add);  
    double(11);    // 22  
    const square = twice(mul);  
    square(11);    // 121
*/
  const double = twice(add);
  const square = twice(mul);

  function twice(value){
    return (a) => {
      return value(a,a);
    };
  }

  console.log("'6' - " + double(11));
  console.log("'6' - " + square(11));

/*
    7. Write a function composeu that takes two unary functions and returns a unary function that calls them both. 

    composeu(double, square)(3);    // 36
*/

function composeu(value, value_2){
  return (a) => {
    return value_2(value(a));
  };
}

console.log("'7' - " + composeu(double, square)(3));

/*
    8. Write a function that adds from many invocations, until it sees an empty invocation.

    addg(3)(4)(5)();     // 12 
    addg(1)(2)(4)(8)();  // 15
*/

function addg(a){
  return function repeat(b) {

    if (b === undefined) {
      return a;
    }

    a += b;
    return repeat;

  };
}

console.log("'8' - " + addg(3)(4)(5)());
console.log("'8' - " + addg(1)(2)(4)(8)());

/*
    9. Write a function that will take a binary function and apply it to many invocations.

    applyg(add)(3)(4)(5)();       // 12 
    applyg(mul)(1)(2)(4)(8)();    // 64
*/

  function applyg(value){
    return function first(a){
      return function repeat(b){
         if (b === undefined){
        return a;
      }
        a = value(a,b);
        return repeat;
      };
     
    } ;
  }

  console.log("'9' - " + applyg(add)(3)(4)(5)());
  console.log("'9' - " + applyg(mul)(1)(2)(4)(8)());
/*
    10. Make a function that returns a function that will return the next fibonacci number.

    const fib = fibonaccif();  
    fib();    // 0  
    fib();    // 1  
    fib();    // 1  
    fib();    // 2  
    fib();    // 3  
    fib();    // 5
*/
const fib = fibonaccif();

function fibonaccif(){
  var numberBefore = 0;
  var result = 0;

  return () => {
    if (numberBefore === 0) {
      numberBefore++;
      return result;
    }

     temp = result;
     result = result + numberBefore;
     numberBefore = temp;
     
     return result;

  }; 
  
}

console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
console.log("'10' - " + fib());
