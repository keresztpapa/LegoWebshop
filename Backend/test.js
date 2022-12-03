const mysqldump = require("mysqldump");
var mysql = require('mysql');
var faker = require('faker');
const path = require("path");
const fs = require('fs')




/*

const dir = '../public/brick_pics';
const files = fs.readdirSync(dir);

for (const file of files) {
    console.log(file);
}

let file_list = files[0].slice(0,-4);

console.log(file_list);

console.log(faker.datatype.number({ min: 1000, max: 10000}));


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'webshop'
});

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'webshop',
    },
    dumpToFile: './backup.sql',
});

*/