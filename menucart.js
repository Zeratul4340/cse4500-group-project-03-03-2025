// We can add more menu menuItems, prices, and pics here
const menuItems = [
    { name: "Big Ultimate", price: 6.49, image: "bigult.png", description: "A massive burger stacked with double beef, cheese, and our secret sauce." },
    { name: "The Crowd Pleaser", price: 4.59, image: "burger.jpg", description: "The usual burger everybody loves." },
    { name: "Fries (medium)", price: 2.99, image: "fries.jpg", description: "Golden and crispy medium-sized fries." },
    { name: "Fries (large)", price: 3.49, image: "fries.jpg", description: "An extra-large portion for serious snackers." },
    { name: "Hotdog", price: 2.99, image: "hotdog.jpg", description: "Our juicy grilled hotdog wrapped in a fresh bun." },
    { name: "Drink (medium)", price: 1.99, image: "drink.jpg", description: "A medium-sized soft drink you can fill with anything." },
    { name: "Drink (large)", price: 2.49, image: "drink.jpg", description: "A large-sized soft drink you can fill with a bit more of everything." }
];

let cart = [];
let subtotal = 0;
let tax_rate = 0.0875;

function renderMenu() {
    menuItems.forEach((item, index) => {
        $('#menu').append(`
        <div class="item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="description">${item.description}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button class="formButton" data-index="${index}">Add to Cart</button>
        </div>
        `);
    });
}

function updateCart(item) {
    cart.push(item);
    subtotal += item.price;

    let tax = subtotal * tax_rate;
    let total = subtotal + tax;

    $('#cart-list').append(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
    $('#subtotal').text(subtotal.toFixed(2));
    $('#tax').text(tax.toFixed(2));
    $('#total').text(total.toFixed(2));

    // Enable checkout button
    $('#checkout').prop('disabled', false);
}

$(document).ready(function () {
    renderMenu();

    $(document).on(`click`, `.formButton`, function () {
        const index = $(this).data(`index`);
        updateCart(menuItems[index]);
    });

    $('#clear-cart').on('click', function () {
        cart = [];
        subtotal = 0;
        $('#cart-list').empty();
        $('#subtotal').text('0.00');
        $('#tax').text('0.00');
        $('#total').text('0.00');

        // Disable checkout button
        $('#checkout').prop('disabled', true);
    });

    $('#checkout').on('click', function () {

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const tax = subtotal * tax_rate;
        const total = subtotal + tax;
    
        // Create a list of items ordered
        const itemSummary = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');

        alert(
            `Thank you for your order!\n\n` +
            `Items Ordered:\n\n${itemSummary}\n\n` +
            `Subtotal: $${subtotal.toFixed(2)}\n` +
            `Tax: $${tax.toFixed(2)}\n` +
            `Total: $${total.toFixed(2)}\n\n` +
            `Please proceed to the counter or payment screen.`
        );
        
        // Reset the cart
        cart = [];
        subtotal = 0;
        $('#cart-list').empty();
        $('#subtotal').text('0.00');
        $('#tax').text('0.00');
        $('#total').text('0.00');

        // Disable checkout button
        $('#checkout').prop('disabled', true);
    });    
});

