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
}

Object.keys(fruits)// ['name', 'apple', 'banana', 'func']
Object.values(fruits)
Object.entries(fruits)