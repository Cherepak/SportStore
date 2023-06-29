const http = require("http");

const hostname = "127.0.0.0";
const port = 3000;

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'databasename'
});

const server = http.createServer((req, res) => {

})
