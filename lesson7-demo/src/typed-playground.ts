// явна типізація
let variable: string;
variable = 'Hello, TypeScript!';
console.log(variable);

variable = 'Hello, TypeScript 6.0!';
console.log(variable);

const stringArray: string[] = [];
stringArray.push('Hello');
stringArray.push('TypeScript');
// stringArray.push(6);
console.log(stringArray);

const stringOrNumberArray: (string | number)[] = [];
stringOrNumberArray.push('Hello');
stringOrNumberArray.push(42);
console.log(stringOrNumberArray);

let stringArrayOrNumberArray: string[] | number[];
const numArr = [1, 2, 3];
const strArr = ['a', 'b', 'c'];
//const mixedArray = [1, 'a', 2, 'b', 3, 'c'];
stringArrayOrNumberArray = numArr;
console.log(stringArrayOrNumberArray);

stringArrayOrNumberArray = strArr;
//stringArrayOrNumberArray = mixedArray;

console.log(stringArrayOrNumberArray);


// неявна типізація
const inferredVariable = 'Hello, TypeScript!';
console.log(inferredVariable);
console.log(typeof inferredVariable);

function add(a: number, b: number): number {
    return a + b;
}

const sum = add(5, 10);
console.log(sum);

function addAndOut(a: number, b: number): void {
    if (a < 0) {
        return;
    }
    console.log(a + b);
}
addAndOut(10, 10);
