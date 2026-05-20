import { Car } from './car';
import { PoliceCar } from './police-car';

const toyotaCamry = new Car('Toyota', 'Camry', 2020, 'sedan', 4);
toyotaCamry.getCarBodyStyleInfo();

const policeCar = new PoliceCar('Ford', 'Focus', 2021, 'coupe', 2, true, true, true);
if (policeCar.siren === true) {
    policeCar.switchSiren();
}
policeCar.getCarBodyStyleInfo();
policeCar.setPoliceCarVin('VIN123456789');
