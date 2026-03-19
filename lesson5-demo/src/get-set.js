const dog = {
    _name: '',

    get name() {
        if (this._name === '') {
            return 'No name yet';
        }
        return this._name;
    },

    set name (name) {
        if (name.length < 2) {
            console.log('Name is too short');
            return;
        }
        this._name = name;
    },

    sayHello: function() {
        console.log('Woof Woof!');
    }

};

console.log(dog.name);
dog.name = 'Rex';
console.log(dog.name);
dog.name = 'A';
console.log(dog.name);
dog.sayHello();
