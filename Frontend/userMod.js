function list_user_onload(){
    fetch('/list_user', {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("user_table");
        
        for(let i = 0; i< data.length;i++){

            
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("name","name");

            let cell2 = row.insertCell();
            cell2.setAttribute("name","szuld");
            
            let cell3 = row.insertCell();
            cell3.setAttribute("name","email");
            
            let cell_dell = row.insertCell();
            let mod_cell = row.insertCell();
            
            cell1.innerHTML = `${data[i].name}`;
            cell2.innerHTML = `${data[i].birth}`;
            cell3.innerHTML = `${data[i].email}`;
            cell_dell.innerHTML = `<button type="submit" id="xbutton" onclick="deleteRowLoadedUser(this)"> X </button>`;
            mod_cell.innerHTML = `<button type="submit" id="mbutton" onclick="mod_user(this)"> Modify </button>`;
        }
    }).catch((error) => {
        console.log(error);
    });
}

async function mod_user(r){
    let i = r.parentNode.parentNode.rowIndex;
    let data = {delete_name: document.getElementById("user_table").rows[i].cells[0].innerHTML,
                delete_date: document.getElementById("user_table").rows[i].cells[1].innerHTML,
                delete_email: document.getElementById("user_table").rows[i].cells[2].innerHTML};

    let mod_name = "";
    let p_name = prompt("Nev modositasa:", document.getElementById("user_table").rows[i].cells[0].innerHTML);
    if (p_name == null || p_name == "") {
        alert("Nothing");
    }else{
        mod_name = p_name;
    }
    
    let mod_birth = "";
    let p_birth = prompt("Szuldatum modositasa:", document.getElementById("user_table").rows[i].cells[1].innerHTML);
    if (p_birth == null || p_birth == "") {
        alert("Nothing");
    }else{
        mod_birth = p_birth;
    }

    let mod_mail = "";
    let p_mail = prompt("Email modositasa:", document.getElementById("user_table").rows[i].cells[2].innerHTML);
    if (p_mail == null || p_mail == "") {
        alert("Nothing");
    }else{
        mod_mail = p_mail;
    }

    let mod_data = {mod_name: mod_name, mod_birth: mod_birth, mod_mail:mod_mail};

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/mod_user");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({data,mod_data}));
    list_user_onload();
}


async function deleteRowLoadedUser(r) {
    if(window.confirm("R U sure?")){  
        let i = r.parentNode.parentNode.rowIndex;
        const xhr = new XMLHttpRequest();
        let data = {delete_name: document.getElementById("user_table").rows[i].cells[0].innerHTML,
                    delete_date: document.getElementById("user_table").rows[i].cells[1].innerHTML,
                    delete_email: document.getElementById("user_table").rows[i].cells[2].innerHTML};


        xhr.open("POST", "/del_user");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(JSON.stringify(data));

        console.log(document.getElementById("user_table").rows[i].cells[0].innerHTML);
        console.log(document.getElementById("user_table").rows[i].cells[1].innerHTML);
        console.log(document.getElementById("user_table").rows[i].cells[2].innerHTML);

        document.getElementById("user_table").deleteRow(i);
    }
}
