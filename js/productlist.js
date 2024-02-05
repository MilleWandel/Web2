fetch("https://kea-alt-del.dk/t7/api/products?limit=20")
.then(res=>res.json())
.then(showProducts)


function showProducts(products){
//Looper og kalder showProduct
products.forEach(showProduct)
}

function showProducts(product){
    console.log(product);
    //fange template
const template = document.querySelector("#smallProductTemplate").textContent;
    //Lave en kopi
const copy = template.cloneNode(true);
    //ændre indhold
copy.querySelector("a").textContent = product.productdisplayname;

    //appendde
document.querySelector("main").appendChild(copy);

//Lav en stiv
const product=123456

}

