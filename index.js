const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL USERNAME,
        user: 'root',
        // MySQL PASSWORD
        password: 'Code123!',
        database: 'departments_info'
    },
    console.log(`Connected to the deparments_info database.`)
);
db.connect(() => {
    init()
})

//FUNCTION START APP AND PROMT MENU
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to request?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add department",
                "Add role",
                "Add employee",
                "Update employee role"]

        }
    ]).then(responds => {
        if (responds.options === "View all departments") {
            viewDepartments()
        } else if (responds.options === "View all roles") {
            checkRoles()
        } else if (responds.options === "View all employees") {
            viewEmps()
        } else if (responds.options === "Add department") {
            addDept()
        } else if (responds.options === "Add role") {
            addRole()
        } else if (responds.options === "Add employee") {
            addEmp()
        } else if (responds.options === "Update employee role") {
            updateREmp()
        }
    })
}

//FUNCTION RENDERS ALL AVAILABLE DEPARTMENTS
function viewDept() {
    db.query("SELECT * FROM departments", (err, data) => {
        console.table(data)
        init()
    })
}

//FUNCRION RENDERS ALL AVAILABLE ROLES
function checkRoles() {
    db.query("SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles INNER JOIN departments ON roles.department_id = departments.id", (err, data) => {
        console.table(data)
        init()
    })
}

//FUNCTION RENDER ALL AVAILABLE EMPLOYEES
function viewEmps() {
    db.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title,
    departments.name AS department, roles.salary,
    CONCAT (manager.first_name, " ", manager.last_name)
    AS manager FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees manager ON employees.manager_id = manager.id`, (err, data) => {
        console.table(data)
        init()
    })
}

//FUNCTION ADDS NEW DEPARTMENT INSIDE THE DATABASE
function addDept() {
    inquirer.prompt([{
        type: "input",
        name: "addDept",
        message: "What is the new department would you like to add?",
    }])
        .then(responds => {
            db.query("INSERT INTO departments(name) VALUES(?)", [responds.addDept], (err) => {
                console.log(`New department has been added sucessfully!`)
                init()
            })
        })
}

//