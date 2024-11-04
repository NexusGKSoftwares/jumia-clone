document.addEventListener("DOMContentLoaded", function() {
    console.log("Jumia Clone is ready!");
    // Add more functionality here as needed
});

let cart = [];

// Function to add items to the cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    alert(`${product.name} has been added to your cart.`);
}

// Function to update cart count in the navbar
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = cart.length;
}

// Function to handle the search functionality
function searchProducts(event) {
    event.preventDefault(); // Prevent form submission
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );

    console.log('Filtered Products:', filteredProducts);
    // Here you can render filteredProducts to the UI
}

// Adding event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.getAttribute('data-id'),
            name: button.getAttribute('data-name'),
            price: button.getAttribute('data-price')
        };
        addToCart(product);
    });
});
