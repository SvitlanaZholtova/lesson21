

let a = prompt ("Enter first number");
let b = prompt ("Enter second number");

function sum(a, b) {
  if (typeof a === Number && typeof b === Number) {
  return a + b;
}
  else
  {return "Error! Please, enter numbers";
}
};
console.log (sum);

function subtraction(a, b) {
  if (typeof a === Number && typeof b === Number) {
    return a - b;
  }
    else
    {return "Error! Please, enter numbers";
  }
};
console.log (subtraction (a, b));

function division(a, b) {
  if (typeof a === Number && typeof b === Number && b!==0) {
    return a / b;
  }
    else
    {return "Error";
  }
};
console.log (division (a, b));

function multiplication(a, b) {
  if (typeof a === Number && typeof b === Number) {
    return a * b;
  }
    else
    {return "Error";
  }
};
console.log (multiplication (a, b));