const a = 5;
const b = 10;
let sum;

function calculateSum() {
    sum = a + b;
}

calculateSum();
console.log(`The sum of ${a} and ${b} is: ${sum}`);


export function multiply(x, y) {
    return x * y;
}
const product = multiply(a, sum);
console.log(`The product of ${a} and ${sum} is: ${product}`);


const subtract = (x, y) => x - y;

function subtractFnc(x, y) {
    return x - y;
}

const difference = subtract(product, sum);
const difference2 = subtractFnc(product, sum);

console.log(`The difference between ${product} and ${sum} is: ${difference}`);
console.log(`The difference between ${product} and ${sum} is: ${difference2}`);
