const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    startPrompt();
});

function startPrompt() {
    inquirer.prompt({
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "Veiw Employees by Department",
            "Add Employees",
            "Remove Employees",
            "Update Employees",
            "Add Role",
            "View all roles",
            "Update Employees Manager",
            "End"
        ]
    })
        .then(function ({ res }) {
            switch (res.startPrompt) {
                case "View Employees":
                    viewEmployees();
                    break;

                case "Veiw Employees by Department":
                    viewEmployeesByDepartment();
                    break;

                case "Add Employees":
                    addEmployees();
                    break;

                case "Remove Employees":
                    removeEmployees();
                    break;

                case "Update Employees":
                    updateEmployees();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "View all roles":
                    viewAllRoles();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;

                case "End":
                    connection.end();
                    break;
            };
        })
};
function viewEmployees() {
    console.log("Viewing Employees\n")
    const query =
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager
        FROM employee e
        LEFT JOIN role r
        ON e.role_id = r.id
        LEFT JOIN department_id
        ON d.id = r.department_id
        LEFT JOIN employee m
        ON m.id = e.manager_id
        `
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        startPrompt();

    });


    function viewEmployeesByDepartment() {
        console.log("Veiwing Employees by Department\n");
        const query =
            `SELECT d.id, d.name
        FROM employee e
        LEFT JOIN role.r
        ON e.role_id = r.id
        LEFT JOIN department d
        ON d.id = r.department_id
        GROUP BY d.id, d.name`;

        connection.query(query, function (err, res) {
            if (err) throw err;
            const departmentOptions = res.map((data) => ({
                value: data.id,
                name: data.name,
            }));
            inquirer.prompt.departmentPrompt(departmentOptions)
                .then(function (answer) {
                   const query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
        FROM employee e
        JOIN role r
            ON e.role_id = r.id
        JOIN department d
        ON d.id = r.department_id
        WHERE d.id = ?`;

                    connection.query(query, answer.departmentId, function (err, res) {
                        if (err) throw err;

                        console.table(res);
                        console.log("Employees View Successfully!");

                        startPrompt();
                    });
                });
  
  
            });

        }   
        
        function addEmployees(){
                console.log("Inserting an employee!")
              
               const query =
                  `SELECT r.id, r.title, r.salary 
                    FROM role r`
              
                connection.query(query, function (err, res) {
                  if (err) throw err;
              
                  const roleOptions = res.map(({ id, title, salary }) => ({
                    value: id, title: `${title}`, salary: `${salary}`
                  }));
              
                  console.table(res);
                  console.log("Role to add!");
              
                  promptAddition (roleOptions);
                });
              }
              
              function promptAddition (roleOptions) {
              
                inquirer
                  .prompt([
                    {
                      type: "input",
                      name: "first_name",
                      message: "What is the Employee's first name?"
                    },
                    {
                      type: "input",
                      name: "last_name",
                      message: "What is the employee's last name?"
                    },
                    {
                      type: "list",
                      name: "role_Id",
                      message: "What is the employee's role?",
                      choices: roleOptions
                    },
                
                  ])
                  .then(function (answer) {
                    console.log(answer);
              
                   const query = `INSERT INTO employee database ?`
                    connection.query(query,
                      {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: answer.role_Id,
                        manager_id: answer.manager_Id,
                      },
                      function (err, res) {
                        if (err) throw err;
              
                        console.table(res);
                        console.log(res.insertedRows + "Inserted Employee Successfully!\n");
              
                        startPrompt();
                      });
               
                  });
              }
              function removeEmployees() {
                console.log("Deleting an Employee");
            
               const query = `SELECT e.id, e.first_name, e.last_name
                  FROM employee e`;
            
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    const deleteEmployeeOptions = res.map(({ id, first_name, last_name }) => ({
                        value: id,
                        name: `${id} ${first_name} ${last_name}`,
                    }));
            
                    inquirer
                        .prompt(prompt.deleteEmployeePrompt(deleteEmployeeOptions))
                        .then(function (answer) {
                           const query = `DELETE FROM Employee database ?`;
                            connection.query(query, { id: answer.employee_Id }, function (err, res) {
                                if (err) throw err;
            
                                console.log("\n" + res.affectedRows + "  Employee Deleted");
                                startPrompt();
                            });
                        });
                });
            }


}


