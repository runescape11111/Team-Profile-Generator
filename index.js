const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/team.html";
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const html1 = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Sample page</title>
</head>
<body>
    <div class = "jumbotron bg-danger">
        <h1 class = "text-center text-light">
            My Team
        </h1>
    </div>
    <div class = "container-fluid">
        <div class = "row">\n`;
const html2 = 
`        </div>
</div>
</body>
</html>`;

function addManager() {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter manager name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter manager id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter manager email:",
        },
        {
            type : "input",
            name : "officeNum",
            message : "Enter manager office number:",
        },
    ])
    .then((data) => {
        const obj = new Manager(data.name, data.id, data.email, data.officeNum);
        fs.appendFileSync(filePath,makeCard(obj));
        askMember();
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter engineer name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter engineer id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter engineer email:",
        },
        {
            type : "input",
            name : "github",
            message : "Enter engineer GitHub username:",
        },
    ])
    .then((data) => {
        const obj = new Engineer(data.name, data.id, data.email, data.github);
        fs.appendFileSync(filePath,makeCard(obj));
        askMember();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter intern name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter intern id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter intern email:",
        },
        {
            type : "input",
            name : "school",
            message : "Enter intern school:",
        },
    ])
    .then((data) => {
        const obj = new Intern(data.name, data.id, data.email, data.school);
        fs.appendFileSync(filePath,makeCard(obj));
        askMember();
    })
};

function makeCard(obj) {
    const partOne = `            <div class = "col-12 col-md-6 col-lg-4 col-xl-3 px-2">
                <div class = "card m-1 border-primary">
                    <div class = "card-header bg-primary">
                        <h4 class = "card-title text-light">${obj.getName()}</h4>
                        <h5 class = "card-subtitle text-light">${obj.getRole()}</h5>
                    </div>
                    <div class = "card-body p-0">
                        <ul class = "list-group list-group-flush">
                            <li class = "list-group-item">ID: <span>${obj.getId()}</span></li>
                            <li class = "list-group-item">Email: <a href = "mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>\n`;
    
    if (obj.getRole() === "Engineer") {
        var partTwo = `                            <li class = "list-group-item">GitHub: <a href = "https://github.com/${obj.getGithub()}/" target = "_blank">${obj.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
    } else if(obj.getRole() === "Manager") {
        var partTwo = `                            <li class = "list-group-item">Office Number: <span>${obj.getOfficeNum()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
    } else {
        var partTwo = `                            <li class = "list-group-item">School: <span>${obj.getSchool()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
    }

    return partOne + partTwo;
};

function askMember() {
    inquirer.prompt([
        {
            type : "list",
            name : "choice",
            message : "Add a new member?",
            choices : ["Engineer","Intern","No, we're done here"],
        },
    ])
    .then((data) => {
        if (data.choice === "No") {
            fs.appendFileSync(filePath,html2);
        } else if (data.choice === "Engineer") {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

function writeHTML() {
    fs.writeFileSync(filePath,html1);
    addManager();
}

writeHTML();