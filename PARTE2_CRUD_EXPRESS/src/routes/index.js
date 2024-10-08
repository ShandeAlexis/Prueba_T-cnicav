const express = require('express');
const productsRouter = require('./product.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/',router)
    router.use('/products', productsRouter);
}

module.exports = routerApi;