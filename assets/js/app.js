document.addEventListener("DOMContentLoaded", function() {
    console.log("Jumia Clone is ready!");
    // Add more functionality here as needed
});
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} added to cart!`);
    // You can also update the cart display here
}
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Product added to cart!');
    });
});
