const numbers = [1.2, 0.3, 4.2, 1.3, 2.43];

const initialValue = 0;
const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);

const level = ["A", "B", "C", "D", "L"];

const num = [1, 2, 3, 4, 5];

function combine(levels: string[], nums: number[]): void {
    console.log(levels);
    console.log(nums);
}

combine(level, num);
