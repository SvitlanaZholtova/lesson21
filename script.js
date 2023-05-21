let a = prompt ("Enter first number");
let b = prompt ("Enter second number");

function sum(a, b) {
  if (typeof a === Number && typeof b === Number) {
  return a+b;
}
  else
  {return "Error! Please, enter numbers";
}
};

function subtraction(a, b) {
  if (typeof a === Number && typeof b === Number) {
    return a-b;
  }
    else
    {return "Error! Please, enter numbers";
  }
};

function division(a, b) {
  if (typeof a === Number && typeof b === Number && b!==0) {
    return a/b;
  }
    else
    {return "Error";
  }
};
function multiplication(a, b) {
  if (typeof a === Number && typeof b === Number) {
    return a*b;
  }
    else
    {return "Error";
  }
};

console.log (sum (a, b));
console.log (subtraction (a, b));
console.log (division (a, b));
console.log (multiplication (a, b));

function getMaxClosure () {
  let max = -Infinity;
  return function (number) {
    if (number > max) {
      max = number;
    }
  return max;}
}

function findMaxNumber (numbers) {
  const getMax = getMaxClosure();
for (let i=0; i<numbers.length; i++) {
  getMax (numbers[i]);}
  return getMax (-Infinity);
}
const numbers = [
  14,
  852,
  234,
  -13,
  862,
  741,
  852,
  -963,
  321,
  789
];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber);

function getMinClosure () {
  let min = Infinity;
  return function (number) {
    if (number < min) {
      min = number;
    }
  return min;}
}

function findMinNumber (numbers) {
  const getMin = getMinClosure();
for (let i=0; i<numbers.length; i++) {
  getMin (numbers[i]);}
  return getMin (Infinity);
}
const minNumber = findMinNumber(numbers);
console.log(minNumber);