import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
