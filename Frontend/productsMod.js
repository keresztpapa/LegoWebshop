function list_products_onload(){
    fetch("/list_products", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("partstable");
        for(let i = 0; i< data.length;i++){
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("name","partid");
            let cell2 = row.insertCell();
            cell2.setAttribute("name","partname");
            let cell3 = row.insertCell();
            cell3.setAttribute("name","partprice");
            let cell4 = row.insertCell();
            cell4.setAttribute("name","partpicture");
            let cell_put_to_cart = row.insertCell();
            cell_put_to_cart.setAttribute("name","cell_put_to_cart");
            let cell_remove_from_cart = row.insertCell();
            cell_remove_from_cart.setAttribute("name","cell_remove_from_cart");
            let cell_counter = row.insertCell();
            cell_counter.setAttribute("name","cell_counter");
            let cell_wish = row.insertCell();
            cell_wish.setAttribute("name","cell_wish");
            cell1.innerHTML = `${data[i].id}`;
            cell2.innerHTML = `${data[i].name}`;
            cell3.innerHTML = `${data[i].price}`;
            cell4.innerHTML = `<img src="${data[i].pic}" alt="pic" height="80" width="80">`;
            cell_put_to_cart.innerHTML = `<button type="submit" id="buy_button" name="buy_button" onclick="addToCart(this)"> Buy </button>`;
            window[data[i].name] = 0;
            cell_remove_from_cart.innerHTML = `<button type="submit" id="remove_button" name="remove_button" onclick="remove_from_cart(this)"> Remove </button>`;
            cell_counter.innerHTML = window[data[i].name]; 
            cell_wish.innerHTML = `<button type="submit" id="wish_button" name="wish_button" onclick="add_to_wish(this)"> Add to wishlist </button>`;
        }
    }).catch((error) => {
        console.log(error);
    });
}

function addToCart(r){
    let i = r.parentNode.parentNode.rowIndex;
    let id = document.getElementById("partstable").rows[i].cells[0].innerHTML;
    let name = document.getElementById("partstable").rows[i].cells[1].innerHTML;
    let price = document.getElementById("partstable").rows[i].cells[2].innerHTML;
    localStorage.setItem(id, window[name]++);
    document.getElementById("partstable").rows[i].cells[6].innerHTML = window[name];
}

function remove_from_cart(r){
    let i = r.parentNode.parentNode.rowIndex;
    let id = document.getElementById("partstable").rows[i].cells[0].innerHTML;
    let name = document.getElementById("partstable").rows[i].cells[1].innerHTML;
    let price = document.getElementById("partstable").rows[i].cells[2].innerHTML;
    if(window[name] > 0) localStorage.setItem(id, window[name]--);
    else localStorage.setItem(id, 0);
    document.getElementById("partstable").rows[i].cells[6].innerHTML = window[name];
    console.log(localStorage.getItem(id));
}

function order(){    
    let table = document.getElementById("partstable");
    var ordered_item = [{}];
    for (let row of table.rows){
        if(row.cells[6].innerHTML != 0 && row.cells[6].innerHTML != 'Quantity'){
            ordered_item.push(JSON.stringify("|"));
            ordered_item.push(JSON.stringify(row.cells[1].innerHTML));
            ordered_item.push(JSON.stringify("|"));
            ordered_item.push(JSON.stringify(row.cells[6].innerHTML));
            ordered_item.push(JSON.stringify("|"));
        }
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/order_function");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(ordered_item));
}

function add_to_wish(r){
    let i = r.parentNode.parentNode.rowIndex;
    var wishlist_items = [{}];
    wishlist_items.push(JSON.stringify("|"));
    wishlist_items.push(JSON.stringify(document.getElementById("partstable").rows[i].cells[1].innerHTML));
    wishlist_items.push(JSON.stringify("|"));
    wishlist_items.push(JSON.stringify(document.getElementById("partstable").rows[i].cells[2].innerHTML));
    wishlist_items.push(JSON.stringify("|")); 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/add_to_wishlist");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(wishlist_items));
}