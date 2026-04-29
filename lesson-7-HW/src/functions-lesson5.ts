function sumValue (values: number[]):number {
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0);
};

console.log(sumValue([1.32, 2.1, 0.99, 4.56]));

function multiply(numbers: number[]):number {
    let result = 1;
    for (const number of numbers) {
        result *= number;
    }
    return result;
}

console.log(multiply([2, 2, 2, 2]));//16

function multiply2 (numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiply2([2, 2, 2, 3]));//24

//calculateExamResult

function calculateMultiplication(points: number[]): string[] {
    return points.map(point => {
        let score: string;
        let status: string;

        if (point < 50) {
            score = 'D';
            status = 'failed';
        } else if (point <= 70) {
            score = 'C';
            status = 'passed';
        } else if (point <= 90) {
            score = 'B';
            status = 'passed';
        } else {
            score = 'A';
            status = 'passed';
        }

        return `Your score is ${score}, points: ${point}. Exam is ${status}`;
    });
}

console.log(calculateMultiplication([34, 56, 78, 91, 12, 43]));
