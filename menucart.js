// We can add more menu menuItems, prices, and pics here
const menuItems = [
    { name: "Big Ultimate", price: 6.49, image: "bigult.png" },
    { name: "The Crowd Pleaser", price: 4.59, image: "burger.jpg" },
    { name: "Fries (medium)", price: 2.99, image: "fries.jpg" },
    { name: "Fries (large)", price: 3.49, image: "fries.jpg" },
    { name: "Hotdog", price: 2.99, image: "hotdog.jpg" },
    { name: "Drink (medium)", price: 1.99, image: "drink.jpg" },
    { name: "Drink (large)", price: 2.49, image: "drink.jpg" }
];

let cart = [];
let total = 0;

function renderMenu() {
    menuItems.forEach((item, index) => {
        $('#menu').append(`
        <div class="item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button class="formButton" data-index="${index}">Add to Cart</button>
        </div>
        `);
    });
}

function updateCart(item) {
    cart.push(item);
    total += item.price;
    $(`#cart-list`).append(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
    $(`#total`).text(total.toFixed(2));
}

$(document).ready(function () {
    renderMenu();

    $(document).on(`click`, `.formButton`, function () {
        const index = $(this).data(`index`);
        updateCart(menuItems[index]);
    });

    $('#clear-cart').on('click', function () {
        cart = [];
        total = 0;
        $('#cart-list').empty();
        $('#total').text('0.00');
    });
});