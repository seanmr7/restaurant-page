import { header , footer } from './margins';
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import { clearContent  } from './utilities';

const restaurantPage = (function() {
  header();
  home(); // Starts user on the home page
  footer();

  // document queries
  let homeBtn = document.getElementById('homeBtn');
  let menuBtn = document.getElementById('menuBtn');
  let contactBtn = document.getElementById('contactBtn')
  
})();