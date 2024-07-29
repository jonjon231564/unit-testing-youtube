const orderTotal = require('./order-total');

test('Quantity', () => {
    const result = orderTotal({
        items: [
            {name: 'Dragon candy', price: 2, quantity: 3}
        ]
    });
    expect(result).toBe(6);
});

test('Happy path (Example 1)', () => {
    const result = orderTotal({
        items: [
            {name: 'Dragon food', price: 8},
            {name: 'Dragon cage (small)', price: 800}
        ]
    });
    expect(result).toBe(808);
});

test('Happy path (Example 2)', () => {
    const result = orderTotal({
        items: [
            {name: 'Dragon collar', price: 20},
            {name: 'Dragon chew toy', price: 40}
        ]
    });
    expect(result).toBe(60);
});