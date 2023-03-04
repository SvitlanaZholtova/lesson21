const arr = [
    14,
    852,
    234,
    'apple',
    13,
    'cat',
    862,
    741,
    852,
    'dog',
    963,
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

