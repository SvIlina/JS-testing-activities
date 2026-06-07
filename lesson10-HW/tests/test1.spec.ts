import { describe, it } from 'mocha';
import { expect } from 'chai';
import { CarParking } from '../src/car-parking';
import { Car } from '../src/car';

describe('sum', () => {
    it('4 + 6 = 10', () => {
        expect(4 + 6).to.be.equal(10);
    });
});

describe('CarParking', () => {
    let parkingLot;
    let car;

    before(function() {
        parkingLot = new CarParking(10);
        car = new Car({
            carBrand: 'Toyota',
            carModel: 'Camry',
            carYear: 2020,
            bodyStyle: 'sedan',
            doors: 4,
            vin: 'VIN123456789'
        });
        parkingLot.addCar(car);
    });
    it('Must return false for unpaid parking', () => {
        expect(parkingLot.isParkingPaid(car)).to.be.false;
    });
    it('Must return true for paid parking', () => {
        parkingLot.pay(car.getVin(), 10);
        expect(parkingLot.isParkingPaid(car)).to.be.true;
        parkingLot.resetPaymentStatus(car.getVin());
    });
    it('Must return false for invalid VIN payment', () => {
        expect(parkingLot.pay('VIN000000000', 10)).to.be.false;
    });
    it('Must return true for valid VIN payment', () => {
        expect(parkingLot.pay(car.getVin(), 10)).to.be.true;
        parkingLot.resetPaymentStatus(car.getVin());
    });
    it('Must return false when trying to remove car from parking lot when payment is not made', () => {
        expect(parkingLot.removeCar(car.getVin())).to.be.false;
        expect(parkingLot.cars.length).to.be.equal(1);
    });
    it('Must return false when trying to remove car from parking lot with invalid VIN', () => {
        expect(parkingLot.removeCar('VIN000000000')).to.be.false;
        expect(parkingLot.cars.length).to.be.equal(1);
    });
    it('Must return true when trying to remove car from parking lot with valid VIN and payment made', () => {
        parkingLot.pay(car.getVin(), 10);
        expect(parkingLot.removeCar(car.getVin())).to.be.true;
        expect(parkingLot.cars.length).to.be.equal(0);
    });
});
