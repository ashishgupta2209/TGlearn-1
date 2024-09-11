// Bottom navbar things starts here

document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar dynamically
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bottom-navbar').innerHTML = data;

            // Get board, class, and type from URL parameters or localStorage
            const board = localStorage.getItem('selectedBoard');
            const userClass = localStorage.getItem('selectedClass');
            const type = localStorage.getItem('selectedType');

            // Add event listeners to handle navigation clicks
            document.getElementById('home').addEventListener('click', function () {
                if (board && userClass) {
                    window.location.href = `home.html?board=${board}&class=${userClass}`;
                } else {
                    window.location.href = 'home.html';
                }
                localStorage.setItem('lastPage', 'home');
            });

            document.getElementById('lessons').addEventListener('click', function () {
                const lastLessonPage = localStorage.getItem('lastLessonPage');
                if (lastLessonPage && lastLessonPage !== 'home.html') {
                    window.location.href = `${lastLessonPage}?board=${board}&class=${userClass}&type=${type}`;
                } else {
                    window.location.href = 'nothinghere.html';
                }
                localStorage.setItem('lastPage', 'lessons');
            });

            // Get the current page URL
            const currentPage = window.location.pathname.split('/').pop(); // Get the current file name (e.g., home.html)

            // If on home.html, select home, otherwise select lessons
            if (currentPage === 'home.html' || currentPage === '') {
                document.getElementById('home').classList.add('selected');
            } else {
                document.getElementById('lessons').classList.add('selected');
                localStorage.setItem('lastPage', 'lessons');  // Track that the last visited page is lessons
                localStorage.setItem('lastLessonPage', currentPage);  // Track the current lesson page
            }
        });
});

// Bottom navbar things ends here


// inspect preventer starts here
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });
// inspect preventer ends here

// Set class name dynamically
document.addEventListener("DOMContentLoaded", function () {
    // Set class name dynamically based on URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userClass = urlParams.get('class') || '10'; // Default to Class 10 if not provided
    document.getElementById('className').innerText = `Class ${userClass}`;
});


// change updated data in localStorage

// Retrieve existing data from local storage
let existingData = JSON.parse(localStorage.getItem('myData')) || {};

// Modify or add new data
existingData.updatedValue = 'New Value'; // Example update

// Save updated data back to local storage
localStorage.setItem('myData', JSON.stringify(existingData));





document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-placeholder');
    if (carouselContainer) {
        fetch('carousel.html')
            .then(response => response.text())
            .then(data => {
                carouselContainer.innerHTML = data;
                // Load CSS and JS for the carousel
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'carousel.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'carousel.js';
                document.body.appendChild(script);
            });
    }
});


document.querySelectorAll('.icon-wrapper').forEach(icon => {
    icon.addEventListener('click', function(e) {
      // Create ripple effect immediately
      const ripple = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
      ripple.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      // Trigger ripple immediately
      ripple.style.animation = 'ripple-animation 600ms linear';

      // Redirect instantly, no delay
      window.location.href = 'settings.html';
    });
  });