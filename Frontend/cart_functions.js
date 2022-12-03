function list_orders(){
    fetch("/parts_price", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        for(let i=0;i<data.length;i++){
            window[data[i].name] = data[i].price; 
        }
        //console.log(data);
    }).catch((error) => {
        console.log(error);
    });

    fetch("/sets_price", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        for(let i=0;i<data.length;i++){
            window[data[i].name] = data[i].price; 
        }
        //console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    
    fetch("/list_orders", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("carttable");
        var sum = 0;
        for(let i = 0; i< data.length;i++){
 
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("name","itemincartname");
            cell1.setAttribute("id","itemincartname");
            let cell2 = row.insertCell();
            cell2.setAttribute("name", "itemincart_pic");
            let cell3 = row.insertCell();
            cell3.setAttribute("name","quantity");
            let cell4 = row.insertCell();
            cell4.setAttribute("name","price");
            let cell_remove_from_cart = row.insertCell();
            cell_remove_from_cart.setAttribute("name","cell_remove_from_cart");

            cell1.innerHTML = `${data[i].productName}`;
            if(data[i].productName[0]+data[i].productName[1]+data[i].productName[2]+data[i].productName[3] == "sets") cell2.innerHTML = `<img src="${data[i].productName}.png" alt="pic" height="80" width="80">`;
            else cell2.innerHTML = `<img src="${data[i].productName}.jpg" alt="pic" height="80" width="80">`;
            cell3.innerHTML = `${data[i].quantity}`;
            cell4.innerHTML = `${window[cell1.innerHTML]*data[i].quantity}`
            cell_remove_from_cart.innerHTML = `<button type="submit" id="remove_button" name="remove_button" onclick="remove_from_cart(this)"> Remove </button>`;
            
            sum += parseInt(window[cell1.innerHTML]*data[i].quantity);
            console.log(sum);
        }
        document.getElementById("final_price").innerHTML = sum;
    }).catch((error) => {
        console.log(error);
    });
}

function remove_from_cart(r){
    let i = r.parentNode.parentNode.rowIndex;
    let name = document.getElementById("carttable").rows[i].cells[0].innerHTML;
    let quantity = document.getElementById("carttable").rows[i].cells[1].innerHTML;
    let price = document.getElementById("carttable").rows[i].cells[2].innerHTML / document.getElementById("carttable").rows[i].cells[1].innerHTML;
    var ordered_item = [{}];

    if(quantity > 0){
        document.getElementById("carttable").rows[i].cells[1].innerHTML = document.getElementById("carttable").rows[i].cells[1].innerHTML-1;
        document.getElementById("carttable").rows[i].cells[2].innerHTML = document.getElementById("carttable").rows[i].cells[1].innerHTML*window[name];
        document.getElementById("final_price").innerHTML -= price;
  
        ordered_item.push(JSON.stringify("|"));
        ordered_item.push(JSON.stringify(document.getElementById("carttable").rows[i].cells[0].innerHTML));
        ordered_item.push(JSON.stringify("|"));
        ordered_item.push(JSON.stringify(document.getElementById("carttable").rows[i].cells[1].innerHTML));
        ordered_item.push(JSON.stringify("|"));
    }   
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/remove_item_from_cart");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(ordered_item));
}

function order(){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/order");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var table = document.getElementById("carttable");
    var ordered_item = [{}];

    for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if(c == 0 || c == 2) {
                ordered_item.push(JSON.stringify("|"));
                ordered_item.push(JSON.stringify(table.rows[r].cells[c].innerHTML));
            }
        }
        ordered_item.push(JSON.stringify("|"));
    }
    window.location.reload();
    console.log(ordered_item);
    xhr.send(JSON.stringify(ordered_item));
}

function list_final_orders(){
    fetch("/list_final_orders", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("carttable");
        var sum = 0;
        for(let i = 0; i< data.length;i++){
 
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("name","orderID");
            
            let cell2 = row.insertCell();
            cell2.setAttribute("name","productName");

            let cell3 = row.insertCell();
            cell3.setAttribute("name","quantity");

            cell1.innerHTML = `${data[i].orderID}`;
            cell2.innerHTML = `${data[i].productName}`;
            cell3.innerHTML = `${data[i].quantity}`
        }
    }).catch((error) => {
        console.log(error);
    });
}