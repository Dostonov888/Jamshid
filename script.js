let num = 266219;

num = Array.from(num.toString()).map(Number);
console.log(num = num.reduce((res, item) => item * res, 1));
console.log(num = num **= 3);
console.log(String(num).slice(0, 2));