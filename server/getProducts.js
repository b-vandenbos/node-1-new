let products = require('../products.json');

let getProducts = (req, res) =>{
    if (req.query.price) {
        let priceFilter = products.filter(item => item.price <= req.query.price);
        res.status(200).send(priceFilter);
    }
    if (!req.query.price) {
        res.status(200).send(products)
    }

};

module.exports = getProducts;