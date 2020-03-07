var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234CanadaDeservesMore$',
  database: 'employeetracker_db'
})

connection.connect(function(err) {
    if (err) throw err;
    start();
});


//
// connection.query('select * from employee', function (error, results, fields) {
//
//   console.log(results)
// })
const promtActions = {
    "Add employee": () => {
      connection.query('select * from roles',(err, res, fields) => {
        let roleOptions = res.map(option => {
          return {[option.title]: option.id}
        })
        let inquirerRoleOptions = {
          name: "roleChoiceId",
          message: "What employee role?",
          type: "list",
          choices: []
        }
        roleOptions.forEach((roleOption, i) => {
          console.log((roleOption));
          inquirerRoleOptions.choices.push({name: Object.keys(roleOption)[0], value: roleOption[Object.keys(roleOption)[0]]})
        });
        console.log(inquirerRoleOptions);
        inquirer.prompt(
          [
            {
              name: "firstName",
              message: "Employee first name?",
              type: "input"
            },
            {
              name: "lastName",
              message: "Employee last name?",
              type: "input"
            },
            inquirerRoleOptions
          ]
        ).then(answers=>{
          console.log(answers);
        })
      })
    },
    "Add department": () => {
    },
    "Quit": () => {
      connection.end()
      console.log("Goodbye!")
    },
  }
  inquirer.prompt({
    name: "firstPrompt",
    message: "What do you want to do?",
    type: "list",
    choices: ["Add employee", "Add department", "Quit"]
  }).then(answers => {
    promtActions[answers[Object.keys(answers)]]()
  })
  