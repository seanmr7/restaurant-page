import { header , footer } from './margins';
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import { clearContent, highlightNav  } from './utilities';

const restaurantPage = (function() {
  header()
  home() // Starts user on the home page
  footer()
  

  // document queries
  let content = document.getElementById('content')
  let homeNav = document.getElementById('homeNav');
  let menuNav = document.getElementById('menuNav');
  let contactNav = document.getElementById('contactNav');
  
  // add event listeners to navigation bar
  homeNav.addEventListener("click", () => {
    clearContent(content)
    home()
    highlightNav(homeNav)
  })
  menuNav.addEventListener("click", () => {
    clearContent(content)
    menu()
    highlightNav(menuNav)
  })
  contactNav.addEventListener("click", () => {
    clearContent(content)
    contact()
    highlightNav(contactNav)
  })
})();