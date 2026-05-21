import { Car } from './car';

export class CarParking {
    public parkingFee: number;
    private penaltyFee: number;
    private isParkingPaid: boolean;

    private _cars: Car[] = [];

    public addCar(car: Car): void {
        this._cars.push(car);
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public constructor(parkingFee: number) {
        this.isParkingPaid = false;
        this.parkingFee = parkingFee;
        this.penaltyFee = parkingFee * 2;
    }

    public parkingPaid(): void {
        if (this.isParkingPaid === true) {
            console.log('Parking is paid.');
        } else {
            this.penaltyFee;
            this.parkingPaid();
        }
    }
}
