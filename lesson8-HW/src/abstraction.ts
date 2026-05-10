export abstract class AirLines {
    protected name: string;
    protected passangerQuantity: number;
    protected civilian: boolean;

    public constructor(name: string, passangerQuantity: number, civilian: boolean) {
        this.name = name;
        this.passangerQuantity = passangerQuantity;
        this.civilian = civilian;
    }
}
