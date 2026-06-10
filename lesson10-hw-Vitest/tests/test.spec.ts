import { describe, expect, afterEach, beforeAll, test } from 'vitest';
import { Car } from '../src/car';
import { CarParking } from '../src/car-parking';

describe('CarParking', () => {
    let car;
    let parkingLot;

    afterEach(() => {
        parkingLot.resetPaymentStatus(car.getVin());
    });

    beforeAll(() => {
        car = new Car({'carBrand': 'Toyota', 'carModel': 'Camry', 'carYear': 2020, 'bodyStyle': 'sedan', 'doors': 4, 'vin': 'VIN123456789'});
        parkingLot = new CarParking(10);
    });

    describe('isParkingPaid', () => {
        test('should return false for unpaid parking', () => {
            parkingLot.addCar(car);
            expect(parkingLot.isParkingPaid(car)).toBe(false);
        });
    });
});
