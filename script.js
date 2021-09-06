const menuItem = document.getElementById('menuitem');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  menuItem.style.height === '0px'
    ? (menuItem.style.height = '100vh')
    : (menuItem.style.height = '0px');
});
