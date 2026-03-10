/*console.log ("Start");
setTimeout(()=>{
    console.log("Task Completed");
},3000);

console.log("End");*/

/*const fs = require("fs");

fs.writeFileSync ("Test.txt","Jai Shree Raam !");

console.log("File Bangaya Bhaiya");*/

/*const math = require('./math');

console.log(math.add(60, 9));
console.log(math.multiply(5, 12));*/

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const tasks = [
    { id: 1, task: "Boliye JAI SHREE RAM" },
    { id: 2, task: "Firse Boliye JAI SHREE RAM" }
];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});