const popup = document.getElementById('popup');
const rulesLink = document.getElementById('rules_link');
const closePopup = document.getElementById('close-popup');

rulesLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    popup.style.display = 'flex'; 
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
