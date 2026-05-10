import { IAphia } from './aphia.dto';
import { IOrchid } from './orchid.dto';

async function getData(): Promise<IAphia[]> {
    const resp = await fetch('https://www.marinespecies.org/rest/AphiaAttributeKeysByID/0?include_children=true');
    const data = await resp.json();
    return data;
}

async function filterData (): Promise<undefined> {
    const aphiaData = await getData();
    const filteredAphia = aphiaData.filter((aphia) => aphia.children.length > 3
    );
    if (filteredAphia.length > 0) {
        const orchid = new Orchid(filteredAphia[0]);
        console.log(orchid);
    } else {
        console.log('No aphia with more than 3 children found.');
    }
}
(async () => {
    await filterData();
})();


class Orchid implements IOrchid{
    public constructor(aphia: IAphia) {
        this.measurementTypeID = aphia.measurementTypeID;
        this.measurementType = aphia.measurementType;
        this.children = aphia.children.filter((child) => child.measurementTypeID < 40);
    }
    public measurementTypeID: number;
    public measurementType: string;
    public children: object[];
}
