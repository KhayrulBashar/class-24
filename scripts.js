var products = [
    {
        'item_id': '250',
        'item_name': 'Pen',
        'price': 100,
        'quantity': 1,
        'variant': 'Red'
    },
    {
        'item_id': '350',
        'item_name': 'Laptop',
        'price': 200,
        'quantity': 1,
        'variant': 'Black'
    },
    {
        'item_id': '450',
        'item_name': 'PC',
        'price': 300,
        'quantity': 1,
        'variant': 'Blue'
    },
    {
        'item_id': '150',
        'item_name': 'Mouse',
        'price': 600,
        'quantity': 1,
        'variant': 'Pink'
    },
    {
        'item_id': '650',
        'item_name': 'Pendrive',
        'price': 700,
        'quantity': 1,
        'variant': 'Yellow'
    },
];

var dynamicArray = [];
var visible = document.getElementById('visibleId');
var showId = document.getElementById('btn');

showId.addEventListener('click', function () {
    for (var i = 0; i < products.length; i++) {
        var newProduct = {
            'id': products[i].item_id,
            'google_business_vertical': 'retail'
        };
        dynamicArray.push(newProduct);
        console.log(newProduct);
    }
    visible.textContent = JSON.stringify(dynamicArray, 0, 4); 
});