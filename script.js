document.addEventListener("DOMContentLoaded", function () {
  // Load the navbar dynamically
  fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('bottom-navbar').innerHTML = data;

          // Add event listeners to handle navigation clicks
          document.getElementById('home').addEventListener('click', function () {
              window.location.href = 'index.html';
              localStorage.setItem('lastPage', 'home');
          });

          document.getElementById('lessons').addEventListener('click', function () {
              const lastLessonPage = localStorage.getItem('lastLessonPage');
              if (lastLessonPage) {
                  window.location.href = lastLessonPage;
              } else {
                  // If no page is stored, go to the "nothing here" page
                  window.location.href = 'nothinghere.html';
              }
              localStorage.setItem('lastPage', 'lessons');
          });

          // Get the current page URL
          const currentPage = window.location.pathname.split('/').pop(); // Get the current file name (e.g., index.html)

          // If on index.html, select home, otherwise select lessons
          if (currentPage === 'index.html' || currentPage === '') {
              document.getElementById('home').classList.add('selected');
          } else {
              document.getElementById('lessons').classList.add('selected');
              localStorage.setItem('lastPage', 'lessons');  // Track that the last visited page is lessons
              localStorage.setItem('lastLessonPage', currentPage);  // Track the current lesson page
          }
      });
});

// Add a function for redirecting to the "nothing here" page
function redirectToNothingHere() {
  window.location.href = 'nothinghere.html';
}
