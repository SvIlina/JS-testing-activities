const initialValue1 = 0;
const sumValues = (values: number[]):number => {
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue1);
};

console.log(sumValues([1.32, 2.1, 0.99, 4.56]));


const multiplyValues = (values: (string | number)[]): number => {
    let result = 1;

    values.forEach(value => {
        if (typeof value === 'number') {
            result *= value;
        }
    });

    return result;
};

console.log(multiplyValues([1.32, "A", "Hello", 4.56]));

const examResult = (points: number[], scores: string[]): string[] => {
    const result: string[] = [];

    const length = Math.min(points.length, scores.length);

    for (let i = 0; i < length; i++) {
        const point = points[i];
        const score = scores[i];

        const status = point < 50 ? 'failed' : 'passed';

        result.push(
            `Your score is ${score}, points: ${point}. Exam is ${status}`
        );
    }

    return result;
};

console.log(examResult([34, 56, 78, 91, 12, 43], ["A", "B", "C", "D"]));
