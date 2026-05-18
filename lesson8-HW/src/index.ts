import { AirLines } from './abstraction';
import { Aphia } from './aphia.dto';
import { Orchid } from './orchid.dto';
import { Ryanair } from './ryanair';

async function getData(): Promise<Aphia[]> {
    const resp = await fetch('https://www.marinespecies.org/rest/AphiaAttributeKeysByID/0?include_children=true');
    const data = await resp.json();
    return data;
}

async function filterData(): Promise<void> {
    const aphiaData = await getData();
    const filteredAphia = aphiaData.filter((aphia) => aphia.children.length > 3);
    if (filteredAphia.length > 0) {
        const orchid = new Orchids(filteredAphia[0]);
        console.log(orchid);
    } else {
        console.log('No aphia with more than 3 children found.');
    }
}
(async () => {
    await filterData();
})();

class Orchids implements Orchid {
    public constructor(aphia: Aphia) {
        this.measurementTypeID = aphia.measurementTypeID;
        this.measurementType = aphia.measurementType;
        this.children = aphia.children.filter((child) => child.measurementTypeID < 40);
    }
    public measurementTypeID: number;
    public measurementType: string;
    public children: object[];
}

const ryanair = new Ryanair('Ryanair', 60, 'Paris-London');

function displayFlightInfo(airline: AirLines): void {
    airline.getCivilian();
    airline.getDistance();
    console.log(
        `Airline: ${airline.name} that flies the route ${airline.route} has a ticket price of ${airline.ticketPrice()} euro and a flight duration ${airline.flightDuration()} hours.`
    );
}
displayFlightInfo(ryanair);
console.log(ryanair.luggageAllowed());
