export abstract class AirLines {
    protected abstract civilian: boolean;
    protected abstract distance_km: number;

    public constructor(public name: string, public passengerQuantity: number, public route: string) {
        this.name = name;
        this.passengerQuantity = passengerQuantity;
        this.route = route;
    }
    public getCivilian(): boolean {
        return this.civilian;
    }
    public getDistance(): number {
        return this.distance_km;
    }
    public abstract ticketPrice(): number;
    public abstract flightDuration(): number;
}
