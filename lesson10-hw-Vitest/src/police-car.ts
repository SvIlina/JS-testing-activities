import { Car } from './car';
import { IPoliceCar } from './police-cars';

export class PoliceCar extends Car implements IPoliceCar {
    public cage: boolean;
    public siren: boolean;
    public radio: boolean;

    public constructor({
        carBrand,
        carModel,
        carYear,
        bodyStyle,
        doors,
        vin,
        cage,
        siren,
        radio
    }: {
        carBrand: string,
        carModel: string,
        carYear: number,
        bodyStyle: string,
        doors: number,
        vin: string,
        cage: boolean,
        siren: boolean,
        radio: boolean
    }) {
        super({carBrand, carModel, carYear, bodyStyle, doors, vin});
        this.cage = cage;
        this.siren = siren;
        this.radio = radio;
    }

    public switchSiren(): void {
        console.log('Wigugigigigigigigigigigigigigigigigig');
    }

}
