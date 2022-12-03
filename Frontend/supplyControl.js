function list_supply_onload(){
    fetch('/list_supply_all', {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("supply_table");
        
        for(let i = 0; i< data.length;i++){
            
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("id","id");

            let cell2 = row.insertCell();
            cell2.setAttribute("piece_id","darab_id");
            
            let cell3 = row.insertCell();
            cell3.setAttribute("warehouse_id","raktar_id");
            
            let cell4 = row.insertCell();
            cell4.setAttribute("quantity","mennyiseg");
            
            let mod_cell = row.insertCell();
            let cell_dell = row.insertCell();
            
            cell1.innerHTML = `${data[i].id}`;
            cell2.innerHTML = `${data[i].piece_id}`;
            cell3.innerHTML = `${data[i].warehouse_id}`;
            cell4.innerHTML = `${data[i].quantity}`;
            cell_dell.innerHTML = `<button type="submit" id="xbutton" onclick="deleteRowLoadedSupply(this)"> X </button>`;
            mod_cell.innerHTML = `<button type="submit" id="mbutton" onclick="mod_supply(this)"> Modify </button>`;
        }
            let addrow = table.insertRow();
            let addcell = addrow.insertCell();
            addcell.setAttribute("add","add");
            addcell.innerHTML = `<button type="submit" id="addbutton" onclick="add_supply(this)"> + </button>`;

    }).catch((error) => {
        console.log(error);
    });
}

async function add_supply(r){
    let i = r.parentNode.parentNode.rowIndex;
    
    let new_id = "";
    let p_id = prompt("ID:");
    if (p_id == null || p_id == "") {
        alert("Nothing");
    }else{
        new_id = p_id;
    }

    let new_piece_id = "";
    let p_piece_id = prompt("Darab ID:");
    if (p_piece_id == null || p_piece_id == "") {
        alert("Nothing");
    }else{
        new_piece_id = p_piece_id;
    }

    let new_warehouse_id = "";
    let p_warehouse_id = prompt("Kapacitas:");
    if (p_warehouse_id == null || p_warehouse_id == "") {
        alert("Nothing");
    }else{
        new_warehouse_id = p_warehouse_id;
    }

    let new_quantity = "";
    let p_quantity = prompt("Kapacitas:");
    if (p_quantity == null || p_quantity == "") {
        alert("Nothing");
    }else{
        new_quantity = p_quantity;
    }
    
    let new_data = {id: new_id, piece_id: new_piece_id, warehouse_id:new_warehouse_id, quantity: new_quantity};

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/add_supply");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(new_data));
    location.reload();
}

async function mod_supply(r){
    let i = r.parentNode.parentNode.rowIndex;
    let data = {id: document.getElementById("supply_table").rows[i].cells[0].innerHTML,
                piece_id: document.getElementById("supply_table").rows[i].cells[1].innerHTML,
                warehouse_id: document.getElementById("supply_table").rows[i].cells[2].innerHTML,
                quantity: document.getElementById("supply_table").rows[i].cells[3].innerHTML};

    let mod_piece_id = "";
    let p_piece_id = prompt("Darab ID modositasa:", document.getElementById("supply_table").rows[i].cells[1].innerHTML);
    if (p_piece_id == null || p_piece_id == "") {
        alert("Nothing");
    }else{
        mod_piece_id = p_piece_id;
    }
    
    let mod_warehouse_id = "";
    let p_warehouse_id = prompt("Raktar modositasa:", document.getElementById("supply_table").rows[i].cells[2].innerHTML);
    if (p_warehouse_id == null || p_warehouse_id == "") {
        alert("Nothing");
    }else{
        mod_warehouse_id = p_warehouse_id;
    }
    
    let mod_quantity = "";
    let p_quantity = prompt("Mennyiseg modositasa:", document.getElementById("supply_table").rows[i].cells[3].innerHTML);
    if (p_quantity == null || p_quantity == "") {
        alert("Nothing");
    }else{
        mod_quantity = p_quantity;
    }

    let mod_data = {id: data.id, piece_id: mod_piece_id, warehouse_id:mod_warehouse_id, quantity:mod_quantity};

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/mod_supply");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(mod_data));
    location.reload();
}


async function deleteRowLoadedWarehouse(r) {
    if(window.confirm("Ne mar! Komoly?")){  
        let i = r.parentNode.parentNode.rowIndex;
        const xhr = new XMLHttpRequest();
        let data = {id: document.getElementById("supply_table").rows[i].cells[0].innerHTML};

        xhr.open("POST", "/del_supply");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(JSON.stringify(data));

        console.log(document.getElementById("supply_table").rows[i].cells[0].innerHTML);
        console.log(document.getElementById("supply_table").rows[i].cells[1].innerHTML);
        console.log(document.getElementById("supply_table").rows[i].cells[2].innerHTML);
        console.log(document.getElementById("supply_table").rows[i].cells[3].innerHTML);

        document.getElementById("supply_table").deleteRow(i);
	    location.reload();
    }
}
