const toggle = document.getElementById('toggle_menu');
const navMenu = document.getElementById('nav_menu');
const toggleMenu = (event) => {
  if (event.target.value == 'Open') {
    toggle.value = 'Close';
    navMenu.classList.add('active');
  } else {
    navMenu.classList.remove('active');
    toggle.value = 'Open';
  }
};

toggle.addEventListener('click', toggleMenu);
