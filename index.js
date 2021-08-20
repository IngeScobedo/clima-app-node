require("dotenv").config()
const { readInput, inquirerMenu, pause, listPlaces } = require("./helpers/inquirer");
const Search = require("./models/searchs");


require("colors");
const main = async () => {
    const search = new Search();
    let opt;
  do {
    console.clear();
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        let place = await readInput("City: ");
        let places =  await search.city(place)
        let id = await listPlaces(places)
        let place_selected = places.find( p =>  p.id === id)
      console.log(place_selected);

        console.log('\nInformation of City\n'.bgGreen.black);
        console.log('City:',places.place_name);
        console.log('Lat:',places.lat);
        console.log('Lng:',places.lng);
        console.log('Tmp:',);
        console.log('Min:',);
        console.log('Max:',);

        


        break;
      case 2:
        console.log({opt});
        break;
    }
    if (opt !== 0) await pause();
} while (opt !== 0);
};

main();
