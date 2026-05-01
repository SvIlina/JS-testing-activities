import { Animal } from './animal';

export class Cat extends Animal {
    protected legsCount = 4;
    protected canFly = false;

    public constructor (name: string) {
        super(name, 'Cat');
    }

    public move(): string {
        return `runs on all ${this.legsCount} legs`;
    }

    public makeSound(): string {
        return 'meows';
    }
}
