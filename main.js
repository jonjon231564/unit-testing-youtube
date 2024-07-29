const someOrder = {
    items: [
        {name: "Dragon food", price: 8},
        {name: "Dragon cage (small)", price: 800}
    ]
}

const orderTotal = order => order.items.reduce((prev, curl) => prev + cur.price, 0)

result = orderTotal(someOrder)
result 808