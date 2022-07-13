const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products/view/:id', ProductController.getProduct);
    app.get('/api/products/view', ProductController.allProducts);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}