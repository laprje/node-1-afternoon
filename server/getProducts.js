// const products = require('../products.json')

const products = require('../MOCK_DATA.json')

const getProducts = (req, res, next) => {
    if(req.query.price) {
        let price = req.query.price;
        const pricedProducts = products.filter(obj => obj.price >= price)
        res.status(200).send(pricedProducts);
    } else {
    res.status(200).send(products);
}
}

module.exports = {
    getProducts: getProducts
}