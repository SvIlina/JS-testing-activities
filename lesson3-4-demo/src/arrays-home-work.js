const age = [18, 17, 65, 70, 21, 30, 45, 60];
const fruits = ['apple', 'banana', 'orange', 'grape'];
const bool = [true, false, true, false];
const arr = [];

age[3];// 70
fruits.push('kiwi');// ['apple', 'banana', 'orange', 'grape', 'kiwi']
bool.pop();// [true, false, true]
arr.unshift('January');// [] ['January']
age.shift();// [17, 65, 70, 21, 30, 45, 60]

for (const fruit of fruits) {
    console.log(fruit);
}

age.filter((age) => age >= 18);////18 shouldn't be included since it was deleted by shift() method, so the result is [65, 70, 21, 30, 45, 60]
fruits.map((fruit) => fruit.toUpperCase());// ['APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'KIWI']

fruits.find((fruit) => fruit.startsWith('b'));// 'banana'
age.sort(age);// [17, 21, 30, 45, 60, 65, 70]
fruits.includes('orange');// true
