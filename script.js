const arr = [
    14,
    852,
    234,
    'apple',
    -13,
    'cat',
    862,
    741,
    852,
    'dog',
    -963,
    321,
    'bread',
    789
];


let sum = 0;

for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') { 
      sum += arr[i];
    }
  }

console.log(sum);


/*let minNum = Infinity; 
let maxNum = -Infinity; */

let minNum = arr[0];
let maxNum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
}

console.log(`Мінімальне число: ${minNum}`); 
console.log(`Максимальне число: ${maxNum}`); 

let output = '';
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    output += '#';
  }
  output += '\n';
}
console.log(output);