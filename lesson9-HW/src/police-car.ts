import { Car } from './car';

export class PoliceCar extends Car implements IPoliceCar {
    public cage: boolean;
    public siren: boolean;
    public radio: boolean;

    public constructor(carBrand: string, carModel: string, carYear: number, bodyStyle: string, doors: number, vin: string, cage: boolean, siren: boolean, radio: boolean) {
        super(carBrand, carModel, carYear, bodyStyle, doors, vin);
        this.cage = cage;
        this.siren = siren;
        this.radio = radio;
    }

    public switchSiren(): void {
        console.log('Wigugigigigigigigigigigigigigigigigig');
    }

}

//Abstract interface for police car
interface IPoliceCar {
    cage: boolean;
    siren: boolean;
    radio: boolean;

    switchSiren(): void;
}
