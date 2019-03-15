let products = require('../products.json');

let getProduct = (req, res) => {
    let item = products.find( val => val.id === parseInt(req.params.id));
    if (!item) {
        return res.status(500).send('Item not in list');
    }
    res.status(200).send(item)
};

module.exports = getProduct;
