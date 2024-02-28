document.addEventListener("DOMContentLoaded", function() {
    // Get all square elements
    var squares = document.querySelectorAll('.square');

    // Iterate through each square
    squares.forEach(function(square) {
        // Add mouseover event listener to each square
        square.addEventListener('mouseover', function() {
            // Change the background color of all squares to Coffee (#6F4E37)
            squares.forEach(function(sq) {
                sq.style.backgroundColor = '#6F4E37'; // Coffee
            });
            // Change the background color of the current square to Lavender (#E6E6FA)
            square.style.backgroundColor = '#E6E6FA'; // Lavender
        });
    });
});
