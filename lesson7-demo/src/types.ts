enum Color {
    Red,
    Green = 100,
    Blue
}

enum AlternateColor {
    Red = 'RED',
    Green = 100,
    Blue = 'BLUE'
}

const red = Color.Red;
console.log(red, Color.Green, Color.Blue);
console.log(AlternateColor.Red, AlternateColor.Green, AlternateColor.Blue);

let user: [string, number];
user = ['Alice', 30];
console.log(user);
user = ['Bob', 25];
console.log(user);

const userExtended: [string, number, boolean] = ['Charlie', 40, true];
console.log(userExtended);

const [userName, age, isActive] = userExtended;
console.log(userName);
console.log(age);
console.log(isActive);

interface User {
    name: string;
    age: number;
    isActive?: boolean;
}
const userObject: User = {
    name: 'David',
    age: 35,
    isActive: false
};
console.log(userObject);

const anotherUser: User = {
    name: userName,
    age: age,
    isActive: isActive
};
console.log(anotherUser);

let record: Record<string, number>;
record = {
    'Alice': 30,
    'Bob': 25
};
console.log(record);
record = {
    'sdkjfnsdk': 30,
    'Bsdcjsdnfob': 25
};
console.log(record);


let obj: object;
obj = userObject;
console.log(obj);
obj = record;
console.log(obj);

let unknownVar: unknown;
unknownVar = 'Hello, World!';
console.log(unknownVar);
unknownVar = 42;
console.log(unknownVar);
unknownVar = record;
console.log(unknownVar);
unknownVar = 55;
console.log(unknownVar);
unknownVar = 'str';
console.log(unknownVar);

const arr: number[] = [1, 2, 3];
if (typeof unknownVar === 'number') {
    arr.push(unknownVar);
} else if (unknownVar && typeof unknownVar === 'string') {
    if (!isNaN(Number(unknownVar))) {
        arr.push(Number(unknownVar));
    }
}

console.log(arr);


// example of usage Any type, but noramlly it is not recommended to use it, because it can lead to loss of type safety and potential runtime errors.
let anyVar: any;
anyVar = 'Hello, World!';
console.log(anyVar);
anyVar = 42;
console.log(anyVar);
