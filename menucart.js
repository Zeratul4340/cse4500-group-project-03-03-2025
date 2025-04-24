// We can add more menu menuItems, prices, and pics here
const menuItems = [
    { name: "Burger", price: 5.99, image: "burger.jpg" },
    { name: "Fries", price: 2.99, image: "fries.jpg" },
    { name: "Hotdog", price: 3.49, image: "hotdog.jpg" },
    { name: "Drink", price: 1.99, image: "drink.jpg" }
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
});