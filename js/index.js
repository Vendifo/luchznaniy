const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());

app.get('/', function (req, res) {
    res.send('Hello World (GET)');
});

app.post('/', function (req, res) {
    res.send('Hello World (POST)');
});

app.listen(3000, function () {
    console.log('http://localhost:3000');
});