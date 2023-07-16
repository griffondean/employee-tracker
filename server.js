const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    // alternatively can be 'localhost'
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'PlacePassWordHere',
    database: 'employeesDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    firstPrompt();
});

// prompts user for which action to take
function firstPrompt() {
    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View Employees",
          "View Employees by Department",
          "Add Employee",
          "Remove Employees",
          "End"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployee();
            break;
          case "View Employees by Department":
            viewEmployeeByDepartment();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Remove Employees":
            removeEmployees();
            break;
          case "End":
            connection.end();
            break;
        }
      });
}

// view employee
function viewEmployee() {
    console.log("Viewing employees\n");
  
    var query =
      `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
      ON m.id = e.manager_id`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      console.table(res);
      console.log("Employees viewed!\n");
  
      firstPrompt();
    });
  
}

// view employee by department
function viewEmployeeByDepartment() {
    console.log("Viewing employees by department\n");
    var query =
      `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      const departmentChoices = res.map(data => ({
        value: data.id, name: data.name
      }));
  
      console.table(res);
      console.log("Department view succeed!\n");
  
      promptDepartment(departmentChoices);
    });
}

// user chooses department list and employees show up
function promptDepartment(departmentChoices) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "departmentId",
          message: "Which department would you like to choose?",
          choices: departmentChoices
        }
      ])
      .then(function (answer) {
        console.log("answer ", answer.departmentId);
        var query =
          `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
    FROM employee e
    JOIN role r
      ON e.role_id = r.id
    JOIN department d
    ON d.id = r.department_id
    WHERE d.id = ?`
  
        connection.query(query, answer.departmentId, function (err, res) {
          if (err) throw err;
  
          console.table("response ", res);
          console.log(res.affectedRows + "Employees viewed!\n");
          firstPrompt();
        });
      });
}

// add employee
function addEmployee() {
    console.log("Adding an employee")
  
    var query =
      `SELECT r.id, r.title, r.salary 
        FROM role r`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
      const roleChoices = res.map(({ id, title, salary }) => ({
        value: id, title: `${title}`, salary: `${salary}`
      }));
      console.table(res);
      promptInsert(roleChoices);
    });
}

// 
function promptInsert(roleChoices) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "Employee's first name?"
        },
        {
          type: "input",
          name: "last_name",
          message: "Employee's last name?"
        },
        {
          type: "list",
          name: "roleId",
          message: "Employee's role?",
          choices: roleChoices
        },
      ])
      .then(function (answer) {
        console.log(answer);
        var query = `INSERT INTO employee SET ?`
        // when finished prompting, insert a new item into the db with that info
        connection.query(query,
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.roleId,
            manager_id: answer.managerId,
          },
          function (err, res) {
            if (err) throw err;
            console.table(res);
            firstPrompt();
          });
      });
}

// remove employees
function removeEmployees() {
    console.log("Deleting an employee");
  
    var query =
      `SELECT e.id, e.first_name, e.last_name
        FROM employee e`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      const deleteEmployeeChoices = res.map(({ id, first_name, last_name }) => ({
        value: id, name: `${id} ${first_name} ${last_name}`
      }));
  
      console.table(res);
      console.log("ArrayToDelete!\n");
  
      promptDelete(deleteEmployeeChoices);
    });
  }