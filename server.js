const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (_, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    console.log(req.body);
    let weight = Number(req.body.weight);
    let height = Number(req.body.height * 0.01);
    let BMI = round((weight / (height * height)), 1);

    let answer
    if (BMI<19) answer = (`BMI ${BMI}: You are underweight`);
    else if (BMI<25 ) answer = (`BMI ${BMI}: You are in a healthy weight`);
    else if (BMI < 30) answer = (`BMI ${BMI}: You are obese`);
    else answer = (`BMI ${BMI}: You are severely obese`);

    res.send(`${answer}`);
});


app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})

//to round to n decimal places
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}