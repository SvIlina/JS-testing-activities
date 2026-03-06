const array = [42, 'hello', true, null, undefined, { name: 'object' }, [1, 2, 3], 3.14, Symbol('sym')];

const filteredArray = array.filter((item) => typeof item === 'object');
const arrayFind = array.find((item) => typeof item === 'object');

console.log('Filtered array (only objects):', filteredArray);
console.log('First object found:', arrayFind);

array.forEach((item) => {
    console.log('Array item:', item);
});

const arrayMap = array.map((item) => {
    if (typeof item === 'object') {
        return item;
    } else {
        return;
    }
}).filter ((item) => item !== undefined);

console.log('Mapped array (objects or undefined):', arrayMap);


