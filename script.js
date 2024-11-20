const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

// Function to open the menu
const openMenu = () => {
  menu.classList.add('active');
}

// Function to close the menu
const closeMenu = () => {
  menu.classList.remove('active');
}

// Event listeners
hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});
