
function home() {
  let content = document.getElementById('content')

  let logo = document.createElement('img');
  logo.src = '../lobster.png';
  logo.id = 'logo';
  logo.alt = 'Lobster';

  let name = document.createElement('h1');
  name.innerText = 'Seafood Shack';
  name.id = 'restaurant-name';

  let phrase = document.createElement('div');
  phrase.innerText = 'The best darn seafood in town';
  phrase.classList.add('catch-phrase', 'text');

  let copy = document.createElement('div');
  copy.classList.add('text')
  let copyText = document.createElement('p');
  copyText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..';

  copy.appendChild(copyText);
  content.appendChild(logo);
  content.appendChild(name);
  content.appendChild(phrase);
  content.appendChild(copy)
}

export { home }