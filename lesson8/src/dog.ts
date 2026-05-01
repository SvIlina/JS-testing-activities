import { Animal } from './animal';

export class Dog extends Animal {
    public static voice = 'woof';
    protected legsCount = 4;
    protected canFly = false;

    public constructor (name: string) {
        super(name, 'Dog');
    }

    public move(): string {
        return 'runs on all fours';
    }

    public makeSound(): string {
        return 'barks';
    }

    public getVoice(): string {
        return Dog.voice;
    }
}

export class Ammstaff extends Dog {
    private character = 'not aggressive but agressive when needed';
    public strength = 10;
    public furLength = 'short';

    public constructor (name: string) {
        super(name);
        this.species = 'Ammstaff';
    }

    public fight(): string {
        return `${this.name} fights with strength ${this.strength}`;
    }

    public getCharacter(): string {
        return this.character;
    }
}
