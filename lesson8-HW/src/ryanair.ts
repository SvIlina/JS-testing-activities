import { AirLines } from './abstraction';

export class Ryanair extends AirLines {
    protected civilian = true;
    protected distance_km = 340;

    public constructor(name: string, passengerQuantity: number, route: string) {
        super(name, passengerQuantity, route);
    }

    public ticketPrice(): number {
        return 30;
    }

    public flightDuration(): number {
        return 1.3;
    }

    public luggageAllowed(): string {
        return 'Only hand luggage allowed, please upgrade your ticket to include checked baggage.';
    }
}
