document.addEventListener("DOMContentLoaded", function() {
    // Get all square elements
    var squares = document.querySelectorAll('.square');

    // Function to reset all square colors to Coffee
    function resetSquareColors() {
        squares.forEach(function(sq) {
            sq.style.backgroundColor = '#6F4E37'; // Coffee
        });
    }

    // Iterate through each square
    squares.forEach(function(square) {
        // Add mouseover event listener to each square
        square.addEventListener('mouseover', function() {
            // Reset all square colors to Coffee
            resetSquareColors();
            // Change the background color of the current square to Lavender
            square.style.backgroundColor = '#E6E6FA'; // Lavender
        });
    });
});
