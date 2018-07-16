function classToggle() {
    const navs = document.querySelectorAll('.btn')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbarmenu')
    .addEventListener('click', classToggle);