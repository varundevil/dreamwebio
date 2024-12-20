const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Check if elements exist before adding event listener
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
} else {
    console.error('Menu toggle or nav menu element not found.');
}
