import { Car } from './car';

export class CarParking {
    public parkingFee: number;
    private penaltyFee: number;
    private parkingPaymentMap: Map<string, boolean>;

    private _cars: Car[] = [];

    public addCar(car: Car): void {
        this._cars.push(car);
        this.parkingPaymentMap.set(car.getVin(), false);
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public constructor(parkingFee: number) {
        this.parkingPaymentMap = new Map<string, boolean>();
        this.parkingFee = parkingFee;
        this.penaltyFee = parkingFee * 2;
    }

    public isParkingPaid(car: Car): string {
        if (this.parkingPaymentMap.get(car.getVin())) {
            return ('Parking is paid.');
        } else {
            return ('Parking is not paid.');
        }
    }

    public pay(vin: string, coinsPaid: number): boolean | undefined {
        if (!this.isCarInParkingLot(vin)) {
            return false;
        }
        if (coinsPaid >= this.parkingFee) {
            console.log('Parking fee paid.');
            this.parkingPaymentMap.set(vin, true);
            return this.parkingPaymentMap.get(vin);
        } else {
            console.log('Invalid payment amount.');
            return this.pay(vin, coinsPaid + 1);
        }
    }
    public removeCar(vin: string): void {
        if (!this.isCarInParkingLot(vin) || !this.parkingPaymentMap.get(vin)) {
            return;
        }
        if (this.parkingPaymentMap.has(vin) && this.parkingPaymentMap.get(vin)) {
            this.parkingPaymentMap.delete(vin);
            this._cars = this._cars.filter(car => car.getVin() !== vin);
            console.log('Car removed from parking lot.');
        }
    }
    private isCarInParkingLot(vin: string): boolean {
        const isCarPresent = this.parkingPaymentMap.has(vin);
        if (!isCarPresent) {
            console.log('Car not found in parking lot.');
        }
        return isCarPresent;
    }
}
