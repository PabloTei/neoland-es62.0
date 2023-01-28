// 1.1

const myFunction = () => {
    return 10 + 5;
}
console.log(myFunction());

// 1.2

const myFunction2 = (a) => {
    return a + 5;
}
console.log(myFunction2(10));

// 1.3

const myFunction3 = (a, b) => {
    return a + b;
}
console.log(myFunction3(10, 5));

// 2.1

const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}
const {title, gender, year} = game
console.log(title);
console.log(gender);
console.log(year);

// 2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction();
console.log(name);
console.log(race);

// 2.4

const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name1, itv} = car
const [itv1, itv2, itv3] = itv
console.log(name1);
console.log(itv1);
console.log(itv2);
console.log(itv3);

// 3.1

const pointsList = [32, 54, 21, 64, 75, 43]

const pointListCopy = [...pointsList];
console.log(pointListCopy);

// 3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};
console.log(toyCopy);

// 3.3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const pointListCopy12 = [...pointsList1, ...pointsList2];
console.log(pointListCopy12);

// 3.4

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const toyUpdateCopy = {...toy2, ...toyUpdate};
console.log(toyUpdateCopy);

// 3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy2 = [...colors]; // Hago copia del array inicial para quitarle la posición del medio
const colorsCopy1 = [...colorsCopy2.splice(0, 1), ...colorsCopy2.splice(1, 4)]; // Realizo spread operator para quitar la posición 2
console.log(colorsCopy1);
console.log(colors); // Array inicial sin modificar

// 4.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const arrayNames = users.map(user => user.name);
console.log(arrayNames);

// 4.2

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const arrayNamesA = users1.map(user => user.name);
const newArrayNamesA = [];
for (const name of arrayNamesA) {
    if (name[0] === "A") {
        newArrayNamesA.push("Anacleto")
    } else {
        newArrayNamesA.push(name);
    }
}
console.log(newArrayNamesA);

// 4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = () => {
    return cities.map((city) => city.isVisited ? `${city.name}: Visitado` : `${city.name}: No visitado`)
}
console.log(citiesVisited());

// 5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesMayor18 = () => {
    return ages.filter((age) => age > 18 ? age : 0)
}
console.log(agesMayor18());

// 5.2

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newArrayPar = () => {
    return ages1.filter((age) => age %2 === 0 ? age : 0)
}
console.log(newArrayPar());


// 5.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const gameMorePlay = () => {
    return streamers.filter((streamer) => streamer.gameMorePlayed.toLowerCase() === "LEAGUE OF LEGENDS".toLowerCase() ? streamer.name : 0)
}
console.log(gameMorePlay());

// 5.4

const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerIncudeU = () => {
    return streamers1.filter((streamer) => streamer.name.includes("u") ? streamer : 0)
}
console.log(streamerIncudeU());

// 5.5

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 24, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const searchStreamers = () => {
    const newArrayStreamersPlus35 = streamers2.filter((streamer) => streamer.gameMorePlayed.includes("Legends") ? streamer : 0);
    for (const streamer of newArrayStreamersPlus35) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        } 
        else  {
            streamer.gameMorePlayed;
        }
}
return newArrayStreamersPlus35;
}
console.log(searchStreamers());

// 6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = (num) => {
    if (numbers.includes(num)) {
        return  numbers.find((number) => number === num);
    } else {
        return "Este número no se encuentra en la lista.";
    }
}
console.log(findNumber(100));

// 6.2

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const findMovie2010 = (year) => {
    return movies.find((movie) => movie.date === year ? movie : 0);
}
console.log(findMovie2010(2010));

// 6.3

const aliens = [
	{name_alien: 'Zalamero', planet: 'Eden', age: 4029},
	{name_alien: 'Paktu', planet: 'Andromeda', age: 32},
	{name_alien: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name_mutation: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name_mutation: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name_mutation: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const searchAliens = (name_alien) => {
    const alien = aliens.find((alien) => alien.name_alien === name_alien);
    return alien;
}

const searchMutations = (name_mutation) => {
    const mutation = mutations.find((mutation) => mutation.name_mutation === name_mutation);
    return mutation;
}

const alinesAndMutations = {...searchAliens("Cucushumushu"), ...searchMutations("Porompompero")};
console.log(alinesAndMutations);




