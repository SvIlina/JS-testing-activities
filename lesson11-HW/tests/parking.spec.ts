import { beforeAll, describe, expect, it } from 'vitest';
import { Car } from '../src/car';
import { CarParking } from '../src/car-parking';

describe('CarParking', () => {
    let car;
    let parkingLot;
    beforeAll(() => {
        car = new Car({'carBrand': 'Toyota', 'carModel': 'Camry', 'carYear': 2020, 'bodyStyle': 'Sedan', 'doors': 4, 'vin': '1HGCM82633A123456'});
        parkingLot = new CarParking(1);
        parkingLot.addCar(car);
    });

    it('Must return false for unpaid parking', () => {
        expect(parkingLot.isParkingPaid(car)).toBe(false);
    });
});
