const a = 6;

if (a > 5) {
    console.log('a is greater than 5');
} else if (a < 0) {
    console.log('a is less than 0');
} else {
    console.log('a is between 0 and 5');
}

console.log(`The value of a is: ${a}`);

switch (a) {
    case 1:
        console.log('a is 1');
        break;
    case 2:
        console.log('a is 2');
        break;
    case 3:
        console.log('a is 3');
        break;
    case 4:
        console.log('a is 4');
        break;
    case 5:
        console.log('a is 5');
        break;
    default:
        console.log('a is not between 1 and 5');
}
