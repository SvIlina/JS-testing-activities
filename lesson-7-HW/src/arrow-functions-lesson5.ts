const initialValue = 0;
const sumValues = (values: number[]):number => {
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 
        initialValue);
};

console.log(sumValues([1.32, 2.1, 0.99, 4.56]))


const multiplyValues = (values: string[]):number => {
    let result = 1;
    values.forEach(value => {
        result *= value;
    });
    return result;
};

console.log(multiplyValues([1.32, "A", "Hello", 4.56]));


const examScore = (prices: number, productNames: string) => {
    if (point < 50) {
        score = "D";
    } else if (point >= 50 && point <=70) {
        score = "C";
    } else if (point > 70 && point <= 90) {
        score = "B";
    } else if (point > 90) {
        score = "A";
    } 
    return `Your score is ${score}, points: ${point}. Exam is passed`;
};

console.log(examScore([34, 56, 78, 91, 12, 43], ["A", "B", "C", "D"]));