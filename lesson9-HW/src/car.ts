import { ICarBodyStyle } from './car-body-style';

export class Car implements ICarBodyStyle {
    public carBrand: string;
    public carModel: string;
    public carYear: number;
    public bodyStyle: string;
    public doors: number;

    public constructor(carBrand: string, carModel: string, carYear: number, bodyStyle: string, doors: number) {
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.carYear = carYear;
        this.bodyStyle = bodyStyle;
        this.doors = doors;
    }

    public getCarBodyStyleInfo(): void {
        console.log(`This car is a ${this.bodyStyle} with ${this.doors} doors.`);
    }
}
