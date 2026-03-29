const sumValues = (values) => {
    let sum = 0;
    values.forEach(value => {
        sum += value;
    });
    return sum;
};

module.exports = sumValues;
sumValues([1.32, 2.1, 0.99, 4.56]);// 8.97


const multiplyValues = (values) => {
    let result =1;
    values.forEach(value => {
        result *= value;
    });
    return result;
};

module.exports = multiplyValues;
multiplyValues([1.32, "A", "Hello", 4.56]); // NaN


const concut = (point, score) => {
    if (point < 50) {
        score = "D";
        return "Your score is " + score + ", points you collected: " + point + " Exam is failed";
    } else if (point >= 50 && point <=70) {
        score = "C";
        return "Your score is " + score + ", points you collected: " + point + " Exam is passed";
    } else if (point > 70 && point <= 90) {
        score = "B";
        return "Your score is " + score + ", points you collected: " + point + " Exam is passed";
    } else if (point > 90) {
        score = "A";
        return "Your score is " + score + ", points you collected: " + point + " Exam is passed";
    }
};

module.exports = concut;
concut([34, 56, 78, 91, 12, 43], ["A", "B", "C", "D"]);