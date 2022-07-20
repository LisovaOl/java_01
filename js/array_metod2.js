let num = 12345;
let arr = String(num).split('');
console.log(arr);

let sum = 0;
for ( digit of arr) {
  sum += digit;
}

console.log(sum);
