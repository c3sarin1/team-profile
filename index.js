const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const allEmployees = []

const generateHtml = (employee) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">    <title>Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class='text-center'>My Team</h1>
        </div>
  </div>
  <div class="card-group">
  <div class="card" style="width: 18rem;">
        <h3 class="card-title text-center">${employee[0].getRole()}</h3>
        <h5 class="card-text text-center">${employee[0].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[0].id}</li>
                <li class="list-group-item">Email:${employee[0].email}</li>
                <li class="list-group-item">Office Number:${employee[0].officeNumber}</li>
          </ul>
          </div>
          </div>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title text-center">${employee[1].getRole()}</h3>
        <h5 class="card-text text-center">${employee[1].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[1].id}</li>
                <li class="list-group-item">Email:${employee[1].email}</li>
                <li class="list-group-item">GitHub:${employee[1].github}</li>
          </ul>
          </div>
          </div>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title text-center">${employee[2].getRole()}</h3>
        <h5 class="card-text text-center">${employee[2].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[2].id}</li>
                <li class="list-group-item">Email:${employee[2].email}</li>
                <li class="list-group-item">School:${employee[2].school}</li>
          </ul>
          </div>
          </div>
          <div class="card" style="width: 18rem;">
        <h3 class="card-title text-center">${employee[3].getRole()}</h3>
        <h5 class="card-text text-center">${employee[3].name}</h5>
      <div class="card-body">
          <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee[3].id}</li>
                <li class="list-group-item">Email:${employee[3].email}</li>
                <li class="list-group-item">School:${employee[3].school}</li>
          </ul>
      </div>
</div>
</div>
</body>
</html>`;