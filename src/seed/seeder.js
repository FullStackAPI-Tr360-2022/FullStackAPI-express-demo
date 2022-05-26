const fsp = require('fs').promises;
const { join } = require('path');
const ProductModel = require('../model/product.model');

( async () => {
    const productJson = await fsp.readFile(
        join(__dirname, 'products.json'),
        'utf8',
    );
    const products = JSON.parse(productJson);
    await ProductModel.insertMany(products);
})();
