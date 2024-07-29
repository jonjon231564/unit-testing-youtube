function orderTotal(order) {
    return order.items.reduce((prev, cur) => {
        return prev + (cur.price * (cur.quantity || 1));
    }, 0);
}

module.exports = orderTotal;