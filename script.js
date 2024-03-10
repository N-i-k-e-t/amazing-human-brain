// Wait for the page to load
window.onload = function() {
    const popup = document.getElementById('popup'); 
    popup.style.display = 'block'; // Show the popup

    // Optional: Close popup after a set time
    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000); // Hide after 5 seconds (adjust the number)
};
