const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "Where are you from?"
    },
    {
        type: "input",
        name: "bio",
        message: "Describe yourself"
    },
    {
        type: "input",
        name: "linkedin",
        message: "What is your LinkedIn URL?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github URL?"
    }
];

function init() {
return inquirer.prompt(questions)
}

function makeHtml(data) {
    
return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>mini project html generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
            <div class="text-center m-3">
            <h1 class="jumbotron">Portfolio</h1>
            <section class="card p-3">My name is ${data.name}</section>
            <section class="card p-3">I am from ${data.location}</section>
            <section class="card p-3">Bio: ${data.bio}</section>
            <section class="card p-3">LinkedIn: ${data.linkedin}</section>
            <section class="card p-3">Github: ${data.github}</span></section>
        </div>
        </body>
        </html>`
    };

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('newfile.html',data,err => {
            if (err) {
                reject(err);
                return;
            } resolve({
                ok: true,
                message: console.log("New file is in the folder")
            }) 
        })
    })
}

init()
    .then(input => {return makeHtml(input)})
    .then(data => {return writeFile(questions.name, data)})