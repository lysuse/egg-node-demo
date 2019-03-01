'use strict';

module.exports = app => {
    app.post('/api/order/create', 'order.create');
    app.get('/api/order/:id', 'order.detail');
};