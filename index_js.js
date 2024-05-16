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

const controlsPopup = document.getElementById('con_popup');
const controlsLink = document.getElementById('controls_link');
const controlClose = document.getElementById('con_popup');

controlsLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    controlsPopup.style.display = 'flex'; 
});

controlClose.addEventListener('click', function() {
    controlsPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === controlsPopup) {
        controlsPopup.style.display = 'none';
    }
});
