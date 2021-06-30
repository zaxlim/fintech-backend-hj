//let x = 12;

//x = "Hong Jin"

//console.log(`value of x: ${x}`);


// conditional statement 

//let age = 5;
//if (age>18) {
//    console.log("you can vote!")
//} else {
//    console.log("you cannot vote right now.");
//}

// functions

// function add (a,b) {
//     console.log(`a: ${a}`);
//     console.log(`b: ${b}`);
// }

// var sum= add(2,3);

// console.log(`Sum:${sum}`);


// Arrow functions
// var function_to_print_sum = (a, b) => {
//     console.log("a + b = " + (a + b));
//   };
  





  // function_to_print_sum(4, 4);

function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
  
  print_after_operation(3, 4, add);
  print_after_operation(3, 4, product);