import { Dog, DogShelter, GuardDog } from './base-principles';

const sirko = new GuardDog('Sirko', 50, 20, 'brown', 'German Shepherd');
const patron = new Dog('Patron', 20, 15, 'white-brown', 'Jack Russell Terrier');

sirko.bark();
patron.call();

const dogShelter = new DogShelter();
dogShelter.addDog(sirko);
dogShelter.addDog(patron);

dogShelter.addGuardDog(sirko);
const names = dogShelter.listGuardDogs();
console.log('Guard Dogs in the shelter:', names);

