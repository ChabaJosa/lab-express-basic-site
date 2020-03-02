const express = require("express");
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/Home.html');
});

app.get('/About', (request, response, next) => {
    response.sendFile(__dirname + '/views/About.html');
});

app.get('/Works', (request, response, next) => {
    response.sendFile(__dirname + '/views/Works.html');
});

app.get('/Gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/Gallery.html');
});

