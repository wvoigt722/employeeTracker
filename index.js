const { prompt } = require("inquirer");
require("console.table");
const queries = require("./Queries");

const PORT = process.env.PORT || 3001;

init();

function init() {
  loadInitialQuestions();
}

function loadInitialQuestions() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a Department",
          value: "ADD_DEPARTMENT",
        },
      ],
    },
  ]).then((choice) => {
    let answer = choice.action;

    switch (answer) {
      case "VIEW_DEPARTMENTS":
        viewDeparments();
        break;
      case "ADD_DEPARTMENT":
        addDeparment();
        break;

      default:
        break;
    }
  });
}

function viewDeparments() {
  queries.viewDeparments().then(([rows, fields]) => {
    console.table(rows);
  });
}
