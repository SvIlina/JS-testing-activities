import { Car } from './car';
import { CarParking } from './car-parking';
import { PoliceCar } from './police-car';

const toyotaCamry = new Car({
    carBrand: 'Toyota',
    carModel: 'Camry',
    carYear: 2020,
    bodyStyle: 'sedan',
    doors: 4,
    vin: 'VIN123456789'
});
toyotaCamry.getCarBodyStyleInfo();

const policeCar = new PoliceCar({
    carBrand: 'Ford',
    carModel: 'Focus',
    carYear: 2021,
    bodyStyle: 'coupe',
    doors: 2,
    vin: 'VIN987654321',
    cage: true,
    siren: true,
    radio: true
});
if (policeCar.siren === true) {
    policeCar.switchSiren();
}
policeCar.getCarBodyStyleInfo();

const parkingLot = new CarParking(10);
parkingLot.addCar(toyotaCamry);
parkingLot.addCar(policeCar);
parkingLot.pay('VIN123456789', 2);
parkingLot.removeCar('VIN123456789');
