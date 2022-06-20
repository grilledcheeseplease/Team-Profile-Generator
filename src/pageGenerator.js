const fs = require('fs');

const generatePage = ({ name, id, email, officeNumber, role, github, school, }) => {
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

  
</body>

</html>`)
}



module.exports = {
    generatePage
};


