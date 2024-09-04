
    // Function to apply styles based on the URL
    function applyStylesBasedOnURL() {
        const homeButton = document.getElementById('home-button');
        const lessonsButton = document.getElementById('lessons-button');

        if (window.location.pathname === '/index.html') {
            // Apply styles for Home button
            homeButton.style.backgroundColor = '#5c5c5c'; // Example style
            homeButton.style.color = 'white'; // Example style
            homeButton.style.borderRadius = '40px'
            homeButton.style.width = '30%'
         
            
            
            // Remove styles from Lessons button
            lessonsButton.style.backgroundColor = ''; // Reset style
            lessonsButton.style.color = ''; // Reset style
            
        } else {
            // Apply styles for Lessons button
            lessonsButton.style.backgroundColor = 'green'; // Example style
            lessonsButton.style.color = 'white'; // Example style
            lessonsButton.style.borderRadius = '40px'
            lessonsButton.style.width = '30%'
          
            
            // Remove styles from Home button
            homeButton.style.backgroundColor = ''; // Reset style
            homeButton.style.color = ''; // Reset style
        }
    }

    // Call the function when the page loads
    window.onload = applyStylesBasedOnURL;

