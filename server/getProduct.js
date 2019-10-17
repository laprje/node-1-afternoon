// const products = require('../products.json')

const products = require('../MOCK_DATA.json')


const getProduct = (req, res, next) => {
    const id = parseInt(req.params.id)
    const foundProducts = products.filter(productObj => productObj.id === id) 
    if(foundProducts.length === 0){
     return res.sendStatus(400)
    }
    return res.status(200).send(foundProducts);
    }



module.exports = {
    getProduct: getProduct
}