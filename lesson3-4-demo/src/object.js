const obj1 =  {
    name: 'object1',
    value: 1,
    func: function() {
        console.log('This is a function in obj1');
    }
};

const obj2 = obj1;
const obj3 = Object.assign({}, obj1);
const obj4 = {...obj1};

console.log(obj1, obj2);

obj2.value = 2;
obj2.name = 'object2';
obj3.value = 3;
obj3.name = 'object3';
obj4.name = 'object4';
obj4.value = 4;
obj4.anotherFunc = function() {
    console.log(`This is another function in ${this.name} with value ${this.value}`);
};

console.log(obj1, obj2, obj3, obj4);
obj1.func();
obj4.anotherFunc();

const a = 5;
let b = a;

console.log(a, b);
b = 6;
console.log(a, b);
