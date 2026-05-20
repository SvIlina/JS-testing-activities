import { ICarBodyStyle } from './car-body-style';

export class Car implements ICarBodyStyle {
    public carBrand: string;
    public carModel: string;
    public carYear: number;
    private vin: string;
    public bodyStyle: string;
    public doors: number;

    public constructor(carBrand: string, carModel: string, carYear: number, bodyStyle: string, doors: number) {
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.carYear = carYear;
        this.bodyStyle = bodyStyle;
        this.doors = doors;
        this.vin = '';
    }

    public getCarBodyStyleInfo(): void {
        console.log(`This car is a ${this.bodyStyle} with ${this.doors} doors.`);
    }

    protected setVin(vin: string): void {
        this.vin = vin;
    }
}
