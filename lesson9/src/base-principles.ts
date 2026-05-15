export class Dog implements IDogSpecies {
    public name: string;
    public height: number;
    public weight: number;
    public color: string;
    private brain: string;
    public speciesName: string;

    public constructor(name: string, height: number, weight: number, color: string, speciesName = 'Generic Dog') {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.color = color;
        this.speciesName = speciesName;
        this.brain = '';
    }

    public bark(): void {
        console.log('Woof!');
    }

    public call(): void {
        console.log(`${this.name} is called.`);
    }

    public train(command: string): void {
        this.learn(command);
    }

    public getSpeciesInfo(): string {
        return `Species: ${this.speciesName}, Color: ${this.color}, Weight: ${this.weight}, Height: ${this.height}`;
    }

    protected learn(command: string): void {
        this.brain += `Learned command: ${command}\n`;
    }
}

interface IGuardDog {
    name: string;
    guard(): void;
    trainGuard(command: string): void;
}

interface IDogSpecies{
    color: string;
    weight: number;
    height: number;
    speciesName: string;
    getSpeciesInfo(): string;
}

export class GuardDog extends Dog implements IGuardDog {
    public guard(): void {
        console.log(`${this.name} is guarding!`);
    }

    public trainGuard(command: string): void {
        this.learn(command);
    }

    public constructor(name: string, height: number, weight: number, color: string, public speciesName: string) {
        super(name, height, weight, color);
    }
}

export class DogShelter {
    public get dogs(): (Dog | IGuardDog)[] {
        return [...this._dogs, ...this._guardDogs];
    }

    private _dogs: Dog[] = [];
    private _guardDogs: IGuardDog[] = [];

    /// LSP, Polymorphism
    public addDog(dog: Dog): void {
        this._dogs.push(dog);
    }

    public addGuardDog(dog: IGuardDog): void {
        dog.trainGuard('Guard the shelter');
        dog.guard();
        this._guardDogs.push(dog);
    }


    public listGuardDogs(): string[] {
        return this._guardDogs.map(dog => dog.name);
    }

    public addDogBySpecies(dog: IDogSpecies): void {
        console.log(dog.getSpeciesInfo());
        this._dogs.push(new Dog(dog.speciesName, dog.height, dog.weight, dog.color, dog.speciesName));
    }
}
