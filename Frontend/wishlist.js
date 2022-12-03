function load_wishlist(){
    fetch("/list_wishlist", {method: 'POST'}).then((res) =>{
        if(res.ok) return res.json();
        throw new Error('Request failed');
    }).then((data) => {
        let table = document.getElementById("wishlist_table");
        for(let i = 0; i< data.length;i++){
            let row = table.insertRow(); 
            let cell1 = row.insertCell();
            cell1.setAttribute("name","wish_name");
            let cell2 = row.insertCell();
            cell2.setAttribute("name","wish_price");
            let cell3 = row.insertCell();
            cell3.setAttribute("name","wish_pic");
            let cell_remove_from_cart = row.insertCell();
            cell_remove_from_cart.setAttribute("name","cell_remove_from_cart");
            let cell_wish = row.insertCell();
            cell_wish.setAttribute("name","cell_wish");
            cell1.innerHTML = `${data[i].name}`;
            cell2.innerHTML = `${data[i].price}`;
            if(data[i].name[0]+data[i].name[1]+data[i].name[2]+data[i].name[3] == "sets") cell3.innerHTML = `<img src="${data[i].name}.png" alt="pic" height="80" width="80">`;
            else cell3.innerHTML = `<img src="${data[i].name}.jpg" alt="pic" height="80" width="80">`;
            window[data[i].name] = 0;
            cell_remove_from_cart.innerHTML = `<button type="submit" id="remove_button" name="remove_button" onclick="remove_from_wish(this)"> Remove </button>`;
        }
    }).catch((error) => {
        console.log(error);
    });
};

function remove_from_wish(r){
    let i = r.parentNode.parentNode.rowIndex;
    var wishlist_items = [{}];
    wishlist_items.push(JSON.stringify("|"));
    wishlist_items.push(JSON.stringify(document.getElementById("wishlist_table").rows[i].cells[0].innerHTML));
    wishlist_items.push(JSON.stringify("|"));
    wishlist_items.push(JSON.stringify(document.getElementById("wishlist_table").rows[i].cells[1].innerHTML));
    wishlist_items.push(JSON.stringify("|")); 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/remove_from_wish");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(wishlist_items));
    window.location.reload();
};