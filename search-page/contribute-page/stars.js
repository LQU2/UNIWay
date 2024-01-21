// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.stars').forEach(function(stars) {
//         stars.addEventListener('click', function() {
//             // Get the index of the star clicked
//             let rating = this.textContent.indexOf('☆') + 1;
//             this.dataset.rating = rating;
//             updateStars(this);
//         });
//     });

//     document.querySelector('.review-box').addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             // Prevent the default action of entering text
//             e.preventDefault();
//             // Code to handle the review submission
//             // For example, save the review to local storage or a database
//             // Then navigate to the next page
//             window.location.href = 'thanks-review.html'; // The URL of the next page
//         }
//     });
// });

// function updateStars(stars) {
//     let rating = parseInt(stars.dataset.rating);
//     stars.textContent = '★★★★★'.substring(0, rating) + '☆☆☆☆☆'.substring(rating);
// }
function rate(starsContainer, event) {
    const stars = starsContainer.textContent.trim();
    const starIndex = Math.floor((event.clientX - starsContainer.getBoundingClientRect().left) / (starsContainer.offsetWidth / stars.length));
    const rating = starIndex + 1;
    starsContainer.dataset.rating = rating;
    starsContainer.textContent = '★'.repeat(rating) + '☆'.repeat(stars.length - rating);
    starsContainer.style.color = '#AD468F';
}

document.querySelector('.review-box').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // prevent the default action (form submission)
        window.location.href = 'thanks.html'; // Redirect to the next page
    }
});
