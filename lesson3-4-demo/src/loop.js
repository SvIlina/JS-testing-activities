for (let i = 0; i < 10; i++) {
    console.log(i);
} // This will print numbers from 0 to 9

while (i>=0 && i<10) {
    console.log(i);
} // This will print numbers from 0 to 9

do {
    console.log(i);
    i++;
} while (i>=0 && i<10) // This will print numbers from 0 to 9

for (let i = 100; i > 0; i -= 10) {
    console.log(i);
}// This will print numbers from 100 to 10, decrementing by 10 each time printing: 100, 90, 80, 70, 60, 50, 40, 30, 20, 10

while (i > 0) {
    console.log(i);
    i -= 10;
}// This will print numbers from 100 to 10, decrementing by 10 each time printing: 100, 90, 80, 70, 60, 50, 40, 30, 20, 10

do {
    console.log(i);
    i -= 10;
} while (i > 0)// This will print numbers from 100 to 10, decrementing by 10 each time printing: 100, 90, 80, 70, 60, 50, 40, 30, 20, 10