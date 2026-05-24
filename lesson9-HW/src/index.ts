import { Car } from './car';
import { CarParking } from './car-parking';
import { PoliceCar } from './police-car';

const toyotaCamry = new Car('Toyota', 'Camry', 2020, 'sedan', 4, 'VIN123456789');
toyotaCamry.getCarBodyStyleInfo();

const policeCar = new PoliceCar('Ford', 'Focus', 2021, 'coupe', 2, 'VIN987654321', true, true, true);
if (policeCar.siren === true) {
    policeCar.switchSiren();
}
policeCar.getCarBodyStyleInfo();

const parkingLot = new CarParking(10);
parkingLot.addCar(toyotaCamry);
parkingLot.addCar(policeCar);
parkingLot.pay('VIN123456789', 2);
parkingLot.removeCar('VIN123456789');
