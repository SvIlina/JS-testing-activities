const whether = prompt('What season is it now?');
switch (whether) {
    case 'winter':
        console.log('Grab skis and go to the mountains');
        break;
    case 'spring':
        console.log('New flowers appear, go to the park and enjoy the nature');
        break;
    case 'summer':
        console.log('Enjoy mountains, enjoy the sea, enjoy the sun');
        break;
    case 'autumn':
        console.log('The leaves are changing color, go for a walk in the forest');
        break;
    default:
        console.log('Invalid season');
}
