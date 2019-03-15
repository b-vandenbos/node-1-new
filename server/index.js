let express = require('express');
let getProducts = require('./getProducts');
let getProduct = require('./getProduct');


let app = express();

let port = 3000;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);




app.listen(port, () => {
    console.log(`This server is receiving requests from port ${port}`);
});


 
