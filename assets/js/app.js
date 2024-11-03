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
