const stock = ['Nvidia', 'Apple', 'Meta', 'Microsoft', 'Coca Cola', 'GameStop', 'Spotify', 'Netflix'];
const price = [50, 100, 150, 200];
const day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

function randomIndexGen(part) {
    return Math.floor(Math.random() * part.length)
}

const stockGen = stock[randomIndexGen(stock)];
const priceGen = price[randomIndexGen(price)];
const dayGen = day[randomIndexGen(day)];

console.log(`buy $${priceGen} of ${stockGen} on ${dayGen}`)