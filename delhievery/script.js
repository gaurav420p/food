// Simulated data for donated foods
const donatedFoods = [
    { id: 1, name: "Rice Bags", quantity: 10 },
    { id: 2, name: "Canned Vegetables", quantity: 20 },
    { id: 3, name: "Breads", quantity: 15 },
    { id: 4, name: "Fruits", quantity: 30 },
];

// Display donated foods in the list
function displayDonatedFoods() {
    const foodList = document.getElementById('food-list');
    donatedFoods.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = `${food.name} - Quantity: ${food.quantity}`;
        foodList.appendChild(listItem);
    });
}

// Call the function to display foods on load
window.onload = function() {
    displayDonatedFoods();
};

function viewOrders() {
    window.location.href = 'view-orders.html';
    // Here, you could redirect to an orders management page
    // window.location.href = 'orders-management.html';
}

function trackDeliveries() {
    window.location.href = 'tracking.html'; // Redirect to the deliveries tracking page
}

function logout() {
    alert("You have been logged out.");
    window.location.href = 'index.html'; // Redirect to the login page
}
