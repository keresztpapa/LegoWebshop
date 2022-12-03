const express = require("express");
const path = require("path");
const {resolve} = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const mysqldump = require("mysqldump");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true})
var mysql = require('mysql');
const {response} = require("express");
const { stringify } = require("querystring");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'webshop'
});

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../Frontend')));
app.use(express.static(path.join(__dirname, '../Frontend/html')));
app.use(express.static(path.join(__dirname, '../public/pngs')));
app.use(express.static(path.join(__dirname, '../public/brick_pics')));
app.use(express.static(path.join(__dirname, '../public/sets_pics')));
const index = resolve('../Frontend/html/index.html');
const login = resolve('../Frontend/html/login.html');
const cart = resolve('../Frontend/html/cart.html');
const wishlist = resolve('../Frontend/html/wishlist.html');
const users = resolve('../Frontend/html/felhasznaloi.html');
const raktar = resolve('../Frontend/html/raktar.html');
const arukeszletek = resolve('../Frontend/html/arukeszletek.html');
const parts = resolve('../Frontend/html/parts.html');
const sets = resolve('../Frontend/html/sets.html');
const order = resolve('../Frontend/html/vegleg_rendeles.html');

app.get('/', (req, res) => res.sendFile(index));
app.get('/index', (req, res) => res.sendFile(index));
app.get('/login', (req, res) => res.sendFile(login));
app.get('/cart', (req, res) => res.sendFile(cart));
app.get('/wishlist', (req, res) => res.sendFile(wishlist));
app.get('/felhasznaloi', (req, res) => res.sendFile(users));
app.get('/raktar', (req, res) => res.sendFile(raktar));
app.get('/arukeszletek', (req, res) => res.sendFile(arukeszletek));
app.get('/parts', (req, res) => res.sendFile(parts));
app.get('/sets', (req, res) => res.sendFile(sets));
app.get('/final_order', (req, res) => res.sendFile(order));

app.post('/add_user', urlencodedParser, function (req, res) {
    let response = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        bday: req.body.bday
    };
    con.query(`INSERT INTO user (name, password, email, birth) VALUE('${req.body.name}', '${req.body.password}', '${req.body.email}', '${req.body.bday}');`, function (err, result) {
        if (err) throw err;
        console.log("record inserted");
    });
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/login_user', urlencodedParser, function (req, res) {
    con.query(`SELECT * FROM user WHERE name = '${req.body.logname}' AND password = '${req.body.logpassword}'`, function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
            //req.session.loggedin = true;
            //req.session.username = username;
            console.log('Login');
            res.send('LOGIN');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
        //res.redirect('/index');
        res.end();
    });
    /*
  if (username && password) {

	} else {
    console.log('nem');
    res.redirect('/login');
		res.end();
	}
  */
})
//name, password, email, bday
app.post('/list_user', urlencodedParser, function (req, res) {
    con.query(`SELECT name, email, birth FROM user;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("FETCH DONE");
});

app.post('/list_products', urlencodedParser, function (req, res) {
    con.query(`SELECT id, name, price, stock, pic FROM products;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("FETCH DONE");
});

app.post('/list_sets', urlencodedParser, function (req, res) {
    con.query(`SELECT id, name, price, stock, pic FROM sets;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("FETCH DONE");
});

app.post('/list_orders', urlencodedParser, function (req, res) {
    con.query(`SELECT productName, quantity FROM orderDetails;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("FETCH DONE");
});

app.post('/parts_price', urlencodedParser, function (req, res) {
    con.query(`SELECT name, price FROM products;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("PARST PRICE FETCH DONE");
});

app.post('/sets_price', urlencodedParser, function (req, res) {
    con.query(`SELECT name, price FROM sets;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("SETS PRICE FETCH DONE");
});

app.post('/list_supply_all', urlencodedParser, function (req, res) {
    console.log(`Listing supplies...`);
    con.query(`SELECT id, piece_id, warehouse_id, quantity FROM supply;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("Supply fetch done");
})

app.post('/add_supply', urlencodedParser, function (req, res) {
    console.log(`Adding supplies...`);
    let response = req.body;
    result = ["", "", "", ""];
    const str = new String(JSON.stringify(req.body));
    let spot = 0;
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result[spot] += str.charAt(start);
                    start+=1;
                }
                spot+=1;
            }
        }
    }
    console.log(result);
    con.query(`INSERT INTO supply (id, warehouse_id, piece_id, quantity) VALUE('${result[0]}', '${result[1]}', '${result[2]}', '${result[3]}');`, function (err, result) {
        if (err) throw err;
        console.log("Supply record inserted");
    });
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/del_supply', urlencodedParser, function (req, res) {
    console.log(`Deleting supplies...`);
    let response = req.body;
    result = "";
    const str = new String(JSON.stringify(req.body));
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result += str.charAt(start);
                    start+=1;
                }
            }
        }
    }
    console.log(result);
    con.query(`DELETE FROM supply WHERE id = '${result}'`, function (err, result) {
        if (err) throw err;
        console.log("Supply record removed");
    });
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/mod_supply', urlencodedParser,async function (req, res) {
    console.log(`Modifying supplies...`);
    let response = req.body;
    result = ["", "", "", ""];
    const str = new String(JSON.stringify(req.body));
    let spot = 0;
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result[spot] += str.charAt(start);
                    start+=1;
                }
                spot+=1;
            }
        }
    }
    con.query(`UPDATE supply SET piece_id = '${result[1]}', warehouse_id = '${result[2]}', quantity = '${result[3]}' WHERE id = '${result[0]}'`, function (err, result) {
        if (err) throw err;
        console.log("Supply record modified");
    });
    res.end(JSON.stringify(response));
})

app.post('/list_warehouse', urlencodedParser, function (req, res) {
    console.log(`Listing warehouses...`);
    con.query(`SELECT id, address, size FROM warehouse;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("Warehouse fetch done");
})

app.post('/add_warehouse', urlencodedParser, function (req, res) {
    console.log(`Adding warehouses...`);
    let response = req.body;
    result = ["", "", ""];
    const str = new String(JSON.stringify(req.body));
    let spot = 0;
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result[spot] += str.charAt(start);
                    start+=1;
                }
                spot+=1;
            }
        }
    }
    console.log(result);
    con.query(`INSERT INTO warehouse (id, address, size) VALUE('${result[0]}', '${result[1]}', '${result[2]}');`, function (err, result) {
        if (err) throw err;
        console.log("Warehouse record inserted");
    });
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/del_warehouse', urlencodedParser, function (req, res) {
    console.log(`Deleting warehouses...`);
    let response = req.body;
    result = "";
    const str = new String(JSON.stringify(req.body));
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result += str.charAt(start);
                    start+=1;
                }
            }
        }
    }
    console.log(result);
    con.query(`DELETE FROM warehouse WHERE id = '${result}'`, function (err, result) {
        if (err) throw err;
        console.log("Warehouse record removed");
    });
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/mod_warehouse', urlencodedParser,async function (req, res) {
    console.log(`Modifying warehouses...`);
    let response = req.body;
    result = ["", "", ""];
    const str = new String(JSON.stringify(req.body));
    let spot = 0;
    for(i=0;i<str.length;i++){
        if(i > 3){
            if(str.charAt(i) == ':' && str.charAt(i+1) == String.fromCharCode(92) && str.charAt(i+2) == '"'){
                let start = i+3;
                while(str.charAt(start) != String.fromCharCode(92)){
                    result[spot] += str.charAt(start);
                    start+=1;
                }
                spot+=1;
            }
        }
    }
    con.query(`UPDATE warehouse SET address = '${result[1]}', size = '${result[2]}' WHERE id = '${result[0]}'`, function (err, result) {
        if (err) throw err;
        console.log("Warehouse record modified");
    });
    res.end(JSON.stringify(response));
})

app.post('/mod_user',urlencodedParser ,async function (req, res) {
    let response = req.body;
    let arr = ["","","",""];
    let strIndex = 0;
    let newArr = ["","","","","","",""];
    const str = new String(JSON.stringify(response));
    console.log(str);
    
    for(i=0;i<str.length;i++){
        if(i>3 && str.charAt(i)+str.charAt(i+1)+str.charAt(i+2)+str.charAt(i+3) == "dele" || i>3 && str.charAt(i)+str.charAt(i+1)+str.charAt(i+2) == "mod"){
            strIndex++;
        }
        if(str.charAt(i).match(/[a-zA-Z_:0-9.@ -]/i)){
            arr[strIndex] += str.charAt(i);
        }
    }

    console.log();
    strIndex = 0;
    let temp = "";
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            temp += arr[i].charAt(j);
            if(temp == "delete_name:" || temp == "delete_date:" || temp == "delete_email:"){  
                for(k=j+1;k<arr[i].length;k++){
                    newArr[strIndex] += arr[i].charAt(k);
                }
                strIndex++;
            }
            if(temp == "undefinedmod_name:" || temp == "undefinedmod_birth:" || temp == "undefinedmod_mail:"){  
                for(k=j+1;k<arr[i].length;k++){
                    newArr[strIndex] += arr[i].charAt(k);
                }
                strIndex++;
            }
        }
        temp = "";
    }
    newArr[4] = newArr[4].slice(0, -14);
    newArr[5] = newArr[5].slice(0,-1);
    res.end();

    con.query(`UPDATE user SET name = '${newArr[3]}', email = '${newArr[5]}', birth = '${newArr[4]}' WHERE name = '${newArr[0]}' AND email = '${newArr[2]}'`, function (err, result) {
        if (err) throw err;
        console.log("UPDATED");
        console.log(JSON.stringify(result));
        res.end();
    });
});


app.post('/del_user',urlencodedParser ,async function (req, res) {
    let response = req.body;
    let arr = ["","","",""];
    let strIndex = 0;
    let newArr = ["","","",""];
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(i>3 && str.charAt(i)+str.charAt(i+1)+str.charAt(i+2) == "del"){
            strIndex++;
        }
        if(str.charAt(i).match(/[a-zA-Z_:0-9.@ -]/i)){
            arr[strIndex] += str.charAt(i);
        }
    }
    strIndex = 0;
    let temp = "";
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            temp += arr[i].charAt(j);
            if(temp == "delete_name:" || temp == "delete_date:" || temp == "delete_email:"){  
                for(k=j+1;k<arr[i].length;k++){
                    newArr[strIndex] += arr[i].charAt(k);
                }
                strIndex++;
            }
        }
        temp = "";
    }
    newArr[2]= newArr[2].slice(0,-1);
    let deleting_name = newArr[0];
    let deleting_date = newArr[1];
    let deleting_mail = newArr[2];
    res.end();
    
    con.query(`DELETE FROM user WHERE name = '${deleting_name}' AND email = '${deleting_mail}';`, function (err, result) {
        if (err) throw err;
        console.log("DELETED");
        console.log(JSON.stringify(result));
        res.end();
    });
});

app.post('/order_function',urlencodedParser ,async function (req, res) {
    let response = req.body;
    var arr = [];
    var opt_arr = [];
    var string = "";
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(str.charAt(i).match(/[a-zA-Z_0-9| -]/i)){
            if(str.charAt(i) == "|"){
                arr.push(string);
                string = "";
                continue;
            }
            string += str.charAt(i);
        }
    }
    for(i=1;i<arr.length;i++){
        if(arr[i] != '') opt_arr.push(arr[i]);
    }
    console.log(opt_arr);
    
    con.query(`INSERT INTO orders () VALUE ();`, function (err, result) {
        if (err) throw err;
    });
    
    var orderID = 0;
    
    con.query(`SELECT MAX(id) as latest FROM orders ;`, function (err, result) {
        if (err) throw err;
        orderID = JSON.parse(JSON.stringify(result))[0].latest;
    });
    
    var sql = `INSERT INTO orderDetails (orderID, productName, quantity) VALUES `;
    
    for(let i=0;i<opt_arr.length;i++){
        sql += ` (${orderID}, '${opt_arr[i]}', ${opt_arr[i+1]} ),`;
        i++;
    }
    
    sql = sql.slice(0, -1);
    sql += ";";
    
    con.query(sql , function (err, result) {
        if (err) throw err;
    });
    
    console.log(sql);
});

app.post('/remove_item_from_cart',urlencodedParser ,async function (req, res) {
    let response = req.body;
    var arr = [];
    var opt_arr = [];
    var string = "";
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(str.charAt(i).match(/[a-zA-Z_0-9| -]/i)){
            if(str.charAt(i) == "|"){
                arr.push(string);
                string = "";
                continue;
            }
            string += str.charAt(i);
        }
    }
    for(i=1;i<arr.length;i++){
        if(arr[i] != '') opt_arr.push(arr[i]);
    }

    con.query(`UPDATE orderDetails SET productName = '${opt_arr[0]}', quantity = '${opt_arr[1]}' WHERE productName = '${opt_arr[0]}' AND quantity = ${parseInt(opt_arr[1])+1}`, function (err, result) {
        if (err) throw err;
        console.log("UPDATED");
        res.end();
    });

    console.log(opt_arr);
});

app.post('/order', urlencodedParser, function (req, res) {
    let response = req.body;
    var arr = [];
    var opt_arr = [];
    var string = "";
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(str.charAt(i).match(/[a-zA-Z_0-9| -]/i)){
            if(str.charAt(i) == "|"){
                arr.push(string);
                string = "";
                continue;
            }
            string += str.charAt(i);
        }
    }
    for(i=1;i<arr.length;i++){
        if(arr[i] != '') opt_arr.push(arr[i]);
    }
    var orderID = 0;
    con.query(`SELECT MAX(id) as latest FROM orders ;`, function (err, result) {
        if (err) throw err;
        orderID = JSON.parse(JSON.stringify(result))[0].latest;
    });

    let sql = `INSERT INTO finalized_order (orderID, productName, quantity) VALUES`;
    for(let i=0;i<opt_arr.length;i++){
        sql += ` (${orderID}, '${opt_arr[i]}', ${opt_arr[i+1]} ),`;
        i++;
    }
    sql = sql.slice(0, -1);
    sql += ";";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("record inserted");
    });
    con.query(`TRUNCATE orders;`, function (err, result) {
        if (err) throw err;
        console.log("table cleared");
    });
    con.query(`TRUNCATE orderDetails;`, function (err, result) {
        if (err) throw err;
        console.log("table cleared");
    });
});

app.post('/list_final_orders', urlencodedParser, function (req, res) {
    con.query(`SELECT orderID, productName, quantity FROM finalized_order;`, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("Supply fetch done");
});

app.post('/add_to_wishlist', urlencodedParser, function (req, res) {
    let response = req.body;
    var arr = [];
    var opt_arr = [];
    var string = "";
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(str.charAt(i).match(/[a-zA-Z_0-9|. -]/i)){
            if(str.charAt(i) == "|"){
                arr.push(string);
                string = "";
                continue;
            }
            string += str.charAt(i);
        }
    }
    for(i=1;i<arr.length;i++){
        if(arr[i] != '') opt_arr.push(arr[i]);
    }
    console.log(opt_arr);
    let sql = `INSERT INTO wishlist (name, price) VALUES`;
    for(let i=0;i<opt_arr.length;i++){
        sql += ` ('${opt_arr[i]}', ${opt_arr[i+1]}),`;
        i++;
        i++;
    }
    sql = sql.slice(0, -1);
    sql += ";";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("record inserted");
    });
});

app.post('/list_wishlist', urlencodedParser, function (req, res) {
    con.query(`SELECT name, price FROM wishlist;`, function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
    console.log("FETCH DONE");
});

cron.schedule('59 23 * * *', function(){
    mysqldump({
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'webshop',
        },
        dumpToFile: './backup.sql',
    });
});

app.post('/remove_from_wish', urlencodedParser, function (req, res) {
    let response = req.body;
    var arr = [];
    var opt_arr = [];
    var string = "";
    const str = new String(JSON.stringify(response));
    for(i=0;i<str.length;i++){
        if(str.charAt(i).match(/[a-zA-Z_0-9|. -]/i)){
            if(str.charAt(i) == "|"){
                arr.push(string);
                string = "";
                continue;
            }
            string += str.charAt(i);
        }
    }
    for(i=1;i<arr.length;i++){
        if(arr[i] != '') opt_arr.push(arr[i]);
    }
    console.log(opt_arr);
    let sql = `DELETE FROM wishlist WHERE name = '${opt_arr[0]}' AND price = ${opt_arr[1]};`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("record deleted");
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
