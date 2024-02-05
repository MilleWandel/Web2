const url="https://kea-alt-del.dk/t7/api/products"

fetch(url)
.then((response)=> response.json()) 
.then((dataReceived))

function dataReceived(data){
    console.log(data);
    data.forEach(list)
}
