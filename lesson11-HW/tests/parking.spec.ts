import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Car } from '../src/car';
import { CarParking } from '../src/car-parking';

describe('CarParking', () => {
    let carMock: Car;
    let parkingLot;
    beforeAll(() => {
        carMock = {
            getVin: vi.fn().mockReturnValue('VIN123')
        } as unknown as Car;

        parkingLot = new CarParking(10);
        parkingLot.addCar(carMock);
    });

    it('Must return false for unpaid parking', () => {
        expect(parkingLot.isParkingPaid(carMock)).toBe('Parking is not paid.');
    });

    it('Must return true for paid parking', () => {
        parkingLot.pay(carMock.getVin(), 11);
        expect(parkingLot.isParkingPaid(carMock)).toBe('Parking is paid.');
    });
});
