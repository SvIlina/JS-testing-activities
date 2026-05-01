export abstract class Animal {
    protected abstract legsCount: number;
    protected abstract canFly: boolean;

    public constructor(public name: string, public species: string) {}

    public getLegsCount(): number {
        return this.legsCount;
    }

    public abstract move(): string;
    public abstract makeSound(): string;
}
