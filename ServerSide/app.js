const express = require('express'); //bringing in the express api
const app = express(); //to use the express api
const cors = require('cors'); // so that we can get around the same origin policy and recieve information from a different port
const logger = require('./logger/logger');  // for logs ig
const validateLoginCredentials = require('./services/loginService');
const registerLoginCredentials = require('./services/registerServices'); //the service side to register stuff
const { getAccountDetails, createAccountDetails, updateAccountDetails } = require('./services/accountService');
const {response, request} = require("express"); //might be replaced with the getAccount details stuff?
const port = 8080;

// why do we need this to parse a request if its from express isn't it included in the express thing
// especially since resposne and request both require express already
app.use(express.json({limit: '100mb'}));// added the limit
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use(
    (request, response, next) => {
        console.log("A new request received at " + new Date(Date.now()));
        next();
    }
);
//This right here is me
app.post('/login', (request, response) => validateLoginCredentials(request, response));
app.post('/registration', (request, response)=>registerLoginCredentials(request, response));
app.get('/account', (request, response) => getAccountDetails(request, response));
app.post('/account', (request, response)=> createAccountDetails(request, response));
app.put('/account', (request, response) => updateAccountDetails(request, response));



app.get('/', (request, response) => {
    response.send("Hello Elroi!");
});



app.listen(port, () => {
    console.log(`Tutorial app listening on port ${port}`);
});

