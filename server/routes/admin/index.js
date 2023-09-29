const router = require('express').Router();

const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');

router.use('/admin.product', productRouter);
router.use('/admin/order', orderRouter);

module.exports = router;
