function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function updateSize(size) {
    var toggleBox = document.querySelector('.toggle-box');
    toggleBox.textContent = size;
    toggleMenu(); // Skjul menuen efter at have valgt en størrelse
}

/*Vise de enkelte pordukter, når man trykker på dem*/

const url="https://kea-alt-del.dk/t7/api/products"

fetch(url)
.then((response)=> response.json()) 
.then((data) => showProduct (data));

function showProduct(product){
    console.log(product);
    document.querySelector("").textContent = product.productdisplayname;
    document.querySelector("").textcontent = product. brandname;
    document.querySelector("img").src="";
}




