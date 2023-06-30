const express = require('express')
const router = express.Router()
const orderCtrl = require('../../controllers/api/orders')

router.get('/cart', orderCtrl.cart)

router.post('/cart/items/:id', orderCtrl.addToCart)

router.post('/cart/checkout', orderCtrl.checkout)

module.exports = router