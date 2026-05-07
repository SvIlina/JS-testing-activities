import { IAphia } from './aphia.dto';

async function getData(): Promise<IAphia[]> {
    const resp = await fetch('https://www.marinespecies.org/rest/AphiaAttributeKeysByID/0?include_children=true');
    const data = await resp.json();
    return data;
}

(async () => {
    const aphiaData = await getData();
    console.log(aphiaData);
})();

function species (): undefined {
}