const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: `${"What do you want to do?\n".inverse}`,
    choices: [
      {
        value: 1,
        name: `${"1.-".red.bold} ${"Buscar Ciudad".green.bold}`,
      },
      {
        value: 2,
        name: `${"2.-".red.bold} ${"Historial".green.bold}`,
      },
      {
        value: 0,
        name: `${"0.-".red.bold} ${"Cerrar".green.bold}`,
      }
    ],
  },
];

const pauseOptions = [
  {
    type: "input",
    name: "enter",
    message: `Press ${"enter".green.bold} to continue`,
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=============================".green.bold);
  console.log("      Select a option:".green.bold);
  console.log("=============================\n".green.bold);

  let { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  console.log(`\n`);
  let { pauseConfig } = await inquirer.prompt(pauseOptions);
  return pauseConfig;
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return console.error("Insert a value");
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

const listPlaces = async (places = []) => {
  let choices = places.map((place, i) => {
    let idx = `${i + 1}.`.red;
    return {
      value: place.id,
      name: `${idx} ${place.place_name}`,
    };
  });

  choices.unshift({
      value: 0,
      name: '0.'.green + ' Cancelar'
  })

  let questions = [
    {
      type: "list",
      name: "id",
      message: "Select a place",
      choices,
    },
  ];

  let { id } = await inquirer.prompt(questions);

  return id;
};

const listToComplete = async (task) => {
  let choices = task.map(({ id, description, date, completed }, i) => {
    let idx = `${i + 1}.`.red;
    return {
      value: id,
      name: description,
      checked: (completed)
              ? true
              : false
    };
  });

  /* choices.unshift({
      value: 0,
      name: '0.'.green + ' Cancelar'
  }) */

  let questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Select an item",
      choices,
    },
  ];

  let { ids } = await inquirer.prompt(questions);
  return ids;
};




const confirm = async (message) => {
    let question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question)
    return ok
}


module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listPlaces,
  confirm,
  listToComplete,
};
