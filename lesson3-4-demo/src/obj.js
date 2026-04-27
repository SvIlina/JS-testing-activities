const fruits = {
    name: ['apple', 'banana', 'orange', 'grape', 'pear'],
    apple: {
        color: 'red',
        taste: 'sweet'
    },
    banana: {
        color: 'yellow',
        taste: 'sweet'
    },
    func: function() {
        console.log('This is a function inside the fruits object');
    }
};

Object.keys(fruits);// ['name', 'apple', 'banana', 'func']
Object.values(fruits);// [['apple', 'banana', 'orange', 'grape', 'pear'], { color: 'red', taste: 'sweet' }, { color: 'yellow', taste: 'sweet' }, function()]
Object.entries(fruits);// [['name', ['apple', 'banana', 'orange', 'grape', 'pear']], ['apple', { color: 'red', taste: 'sweet' }], ['banana', { color: 'yellow', taste: 'sweet' }], ['func', function() { console.log('This is a function inside the fruits object'); }]]
