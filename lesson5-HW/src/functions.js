const price = [1.09, 0.76, 2.46, 0.89, 1.29];

function calculateTotalPrice(price) {
    for (let i = 0; i < price.length; i++) {
        price=+price[i];
    }
    return price;
}

module.exports = calculateTotalPrice;

function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

module.exports = multiply;
multiply([2,2,2,2])

const point = [34, 56, 78, 91, 12, 43];

const letterPoint = ["A", "B", "C", "D"];

function calculateMultiplication(point, letterPoint) {
    for (let i = 0; i < point.length; i++) {
        for (let j = 0; j < letterPoint.length; j++) {
            if (point[i] < 50) {
                letterPoint[j] = "D";
                console.log("Your score is " + letterPoint[j] + ", points you collected: " + point[i] + "Exam is failed");
            } else if (point[i] >= 50 && point[i] <=70) {
                letterPoint[j] = "C";
                console.log("Your score is " + letterPoint[j] + ", points you collected: " + point[i] + "Exam is passed");
            } else if (point[i] > 70 && point[i] <= 90) {
                letterPoint[j] = "B";
                console.log("Your score is " + letterPoint[j] + ", points you collected: " + point[i] + "Exam is passed");
            } else if (point[i] > 90) {
                console.log("Your score is " + letterPoint[j] + ", points you collected: " + point[i] + "Exam is passed");
                letterPoint[j] = "A";
            }
        }
    }
}

module.exports = calculateMultiplication;

calculateMultiplication(point, letterPoint);// Your score is D, points you collected: 34 Exam is failed
// Your score is D, points you collected: 56 Exam is passed
// Your score is C, points you collected: 78 Exam is passed
// Your score is B, points you collected: 91 Exam is passed
// Your score is D, points you collected: 12 Exam is failed
// Your score is D, points you collected: 43 Exam is failed