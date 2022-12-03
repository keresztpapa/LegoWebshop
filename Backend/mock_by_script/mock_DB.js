var mysql = require('mysql');  
var faker = require('faker');
const fs = require('fs')
var DateGenerator = require('random-date-generator');
var con = mysql.createConnection({  
    //host: "localhost",  
    host: '127.0.0.1',
    port: 3306,
    user: "root",  
    password: "admin",
    database: "webshop"  
  });  

function test(str){
        con.query(`SELECT * FROM ${str}`, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
}

function addUser(){
    let fake_name_first = faker.name.firstName();
    let fake_name_last = faker.name.lastName();
    con.query(`INSERT INTO user (name, password, email, birth) VALUE ('${fake_name_first} ${fake_name_last}','${faker.internet.password()}','${fake_name_first}_${fake_name_last}@gmail.com', '${DateGenerator.getRandomDateInRange(new Date(1900, 2, 2), new Date(2000, 3, 3)).toISOString().slice(0, 10)}');`, function (err, result, fields) { if (err) throw err; });
}

function addProd(){
    var files = fs.readdirSync('../../public/brick_pics');
    for (var file of files) {
        //console.log(file);
        con.query(`INSERT INTO products (name, price, stock, pic) VALUE ('${file.slice(0,-4)}','${faker.datatype.number({ min: 1000, max: 10000})}', '${faker.datatype.number({ min: 0, max: 1000})}','${file}');`, function (err, result, fields) { if (err) throw err; });
    }
}

function addSets(){
  var files = fs.readdirSync('../../public/sets_pics');
  for (var file of files) {
      console.log(file);
      con.query(`INSERT INTO sets (name, price, stock, pic) VALUE ('${file.slice(0,-4)}','${faker.datatype.number({ min: 1000, max: 10000})}', '${faker.datatype.number({ min: 0, max: 1000})}','${file}');`, function (err, result, fields) { if (err) throw err; });
  }
}

con.query(`DROP TABLE IF EXISTS user;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS products;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS orders;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS orderDetails;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS sets;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS finalized_order;`, function (err, result, fields) {if (err) throw err;});
con.query(`DROP TABLE IF EXISTS wishlist;`, function (err, result, fields) {if (err) throw err;});

con.query("create table if not exists user( name varchar(255) not null,password varchar(255) not null, email varchar(255) not null, birth DATE, primary key(email));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists products(id MEDIUMINT NOT NULL AUTO_INCREMENT ,name varchar(255) not null,price int not null, stock int not null, pic varchar(255), primary key(id));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists sets(id MEDIUMINT NOT NULL AUTO_INCREMENT ,name varchar(255) not null,price int not null, stock int not null, pic varchar(255), primary key(id));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists orders(id MEDIUMINT NOT NULL AUTO_INCREMENT, primary key(id));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists orderDetails(id int not null auto_increment,orderID int not null, productName varchar(255), quantity int, primary key(id));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists finalized_order(id int not null auto_increment, orderID int not null, productName varchar(255), quantity int, primary key(id));", function (err, result, fields) {if (err) throw err;});
con.query("create table if not exists wishlist(id int not null auto_increment, name varchar(255), price int, primary key(id));", function (err, result, fields) {if (err) throw err;});

for(i=0;i<50;i++) addUser();

addProd();
addSets();
test('sets');

con.end();
