const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    // console.log(req.body.num1);
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("Thanks for posting that : " + result);

});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi);

})

app.listen(3000, function() {
    console.log("server is runnig on port 3000");

});