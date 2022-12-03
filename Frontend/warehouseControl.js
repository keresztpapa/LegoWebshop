function list_warehouse_onload(){
    fetch('/list_warehouse', {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("warehouse_table");
        for(let i = 0; i< data.length;i++){

            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("id","id");

            let cell2 = row.insertCell();
            cell2.setAttribute("address","cim");
            
            let cell3 = row.insertCell();
            cell3.setAttribute("size","kapacitas");
            
            let mod_cell = row.insertCell();
            let cell_dell = row.insertCell();
            
            cell1.innerHTML = `${data[i].id}`;
            cell2.innerHTML = `${data[i].address}`;
            cell3.innerHTML = `${data[i].size}`;
            cell_dell.innerHTML = `<button type="submit" id="xbutton" onclick="deleteRowLoadedWarehouse(this)"> X </button>`;
            mod_cell.innerHTML = `<button type="submit" id="mbutton" onclick="mod_warehouse(this)"> Modify </button>`;
        }
            let addrow = table.insertRow();
            let addcell = addrow.insertCell();
            addcell.setAttribute("add","add");
            addcell.innerHTML = `<button type="submit" id="addbutton" onclick="add_warehouse(this)"> + </button>`;

    }).catch((error) => {
        console.log(error);
    });
}

async function add_warehouse(r){
    let i = r.parentNode.parentNode.rowIndex;
    
    let new_id = "";
    let p_id = prompt("ID:");
    if (p_id == null || p_id == "") {
        alert("Nothing");
    }else{
        new_id = p_id;
    }

    let new_address = "";
    let p_address = prompt("Cim:");
    if (p_address == null || p_address == "") {
        alert("Nothing");
    }else{
        new_address = p_address;
    }

    let new_size = "";
    let p_size = prompt("Kapacitas:");
    if (p_size == null || p_size == "") {
        alert("Nothing");
    }else{
        new_size = p_size;
    }
    
    let new_data = {id: new_id, address: new_address, size:new_size};

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/add_warehouse");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(new_data));
    location.reload();
}

async function mod_warehouse(r){
    let i = r.parentNode.parentNode.rowIndex;
    let data = {id: document.getElementById("warehouse_table").rows[i].cells[0].innerHTML,
                address: document.getElementById("warehouse_table").rows[i].cells[1].innerHTML,
                size: document.getElementById("warehouse_table").rows[i].cells[2].innerHTML};

    let mod_address = "";
    let p_address = prompt("Cim modositasa:", document.getElementById("warehouse_table").rows[i].cells[1].innerHTML);
    if (p_address == null || p_address == "") {
        alert("Nothing");
    }else{
        mod_address = p_address;
    }
    
    let mod_size = "";
    let p_size = prompt("Kapacitas modositasa:", document.getElementById("warehouse_table").rows[i].cells[2].innerHTML);
    if (p_size == null || p_size == "") {
        alert("Nothing");
    }else{
        mod_size = p_size;
    }

    let mod_data = {id: data.id, address: mod_address, size:mod_size};

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/mod_warehouse");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(mod_data));
    location.reload();
}


async function deleteRowLoadedWarehouse(r) {
    if(window.confirm("Ez komoly?")){  
        let i = r.parentNode.parentNode.rowIndex;
        const xhr = new XMLHttpRequest();
        let data = {id: document.getElementById("warehouse_table").rows[i].cells[0].innerHTML};

        xhr.open("POST", "/del_warehouse");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(JSON.stringify(data));

        console.log(document.getElementById("warehouse_table").rows[i].cells[0].innerHTML);
        console.log(document.getElementById("warehouse_table").rows[i].cells[1].innerHTML);
        console.log(document.getElementById("warehouse_table").rows[i].cells[2].innerHTML);

        document.getElementById("warehouse_table").deleteRow(i);
	    location.reload();
    }
}
