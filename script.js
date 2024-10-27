// Show the modal when the page loads
window.onload = function() {
    document.getElementById("myModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function login() {
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (role === 'admin' && username === 'admin' && password === 'adminpassword') {
        alert("Admin login successful!");
        window.location.href = 'admin/admin-dashboard.html'; // Updated path
    } else if (role === 'user' && username === 'user' && password === 'userpassword') {
        window.location.href = 'user/user-dashboard.html'; // Updated path
    } else if (role === 'delhievery' && username === 'delhievery' && password === 'deliverypassword') {
        alert("Delhievery login successful!");
        window.location.href = 'delhievery/delhievery-dashboard.html'; // Updated path
    } else {
        errorMsg.textContent = "Invalid credentials or role. Please try again.";
    }
}
