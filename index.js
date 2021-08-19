require("dotenv").config()
const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");
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
        await search.city(place)


        console.log('\nInformation of City\n'.bgGreen.black);
        console.log('City:',place);
        console.log('Lat:',);
        console.log('Lng:',);
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
