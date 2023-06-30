const Order = require('../../models/order')


async function cart(req, res) {
    const cart = await Order.getCart(req.user._id)
    res.json(cart)
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id)
    await cart.addItemToCart(req.params.id)
    res.json(cart)
}

async function checkout(req, res) {
    
}

module.exports = {
    cart,
    addToCart,
    checkout
}