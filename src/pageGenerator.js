const fs = require('fs');

const managerCard = (manager) => {
    return `<div class="w3-third">
        <div class="w3-card">
            <div class="w3-container">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
                <ul>
                    <li>${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
};

const engineerCard = (engineer) => {
    return `<div class="w3-third">
        <div class="w3-card">
            <div class="w3-container">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
                <ul>
                    <li>${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`
};

const internCard = (intern) => {
    return `<div class="w3-third">
        <div class="w3-card">
            <div class="w3-container">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
                <ul>
                    <li>${intern.id}</li>
                    <li>Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`
};

const teamCards = (data) => {
   
    let pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
      
        if (role === 'Manager') {
            const managerData = managerCard(employee);

            pageArray.push(managerData);
        }

        if (role === 'Engineer') {
            const engineerData = engineerCard(employee);

            pageArray.push(engineerData);
        }

        if (role === 'Intern') {
            const internData = internCard(employee);

            pageArray.push(internData);
        }

    }

    const employeeCards = pageArray.join('')
    
    const generateTeam = generatePage(employeeCards);
    return generateTeam;

};

const generatePage = (teamCards) => {
    const template = (`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-teal.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
</head>

<body>
<!-- Header -->
<header class="w3-container w3-theme w3-padding" id="myHeader">
    <div class="w3-center">
    <h4>Team Profile Generator</h4>
    <h1 class="w3-xxxlarge w3-animate-bottom">My Team</h1>
    </div>
  </header>

  <div class="w3-row-padding"></div>
    ${teamCards}
  
</body>

</html>`)
console.log(template);
}

module.exports = {
    teamCards
};
