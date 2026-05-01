import { Animal } from './animal';
import { Cat } from './cat';
import { Ammstaff, Dog } from './dog';
import { ToDo } from './todo.dto';

async function getToDos(): Promise<ToDo[]> {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await resp.json();
    return data;
}

(async () => {
    const todos = await getToDos();
    console.log(todos[0]);
    console.log(`UserId: ${todos[0].userId}`);
})();

const fred = new Dog('fred');
const murchyk = new Cat('murchyk');

function describeAnimal(animal: Animal): void {
    animal.getLegsCount();
    console.log(`${animal.name} is a ${animal.species} that ${animal.move()} and ${animal.makeSound()}`);
}

describeAnimal(fred);
describeAnimal(murchyk);


const amstaff = new Ammstaff('Rex');
describeAnimal(amstaff);
console.log(amstaff.fight());

console.log(amstaff.getCharacter());

console.log(`fred's voice: ${fred.getVoice()}, Rex's voice: ${amstaff.getVoice()}`);
Dog.voice = 'woof-woof';
console.log(`fred's voice: ${fred.getVoice()}, Rex's voice: ${amstaff.getVoice()}`);
