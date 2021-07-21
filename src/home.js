
function home() {
  const container = document.createElement('div');
  container.classList.add('container');

  const logo = document.createElement('img');
  logo.src = '../lobster.png';
  logo.id = 'logo';
  logo.alt = 'Lobster';

  const name = document.createElement('h1');
  name.innerText = 'Seafood Shack';
  name.id = 'restaurant-name';

  const phrase = document.createElement('div');
  phrase.innerText = 'The best darn seafood in town';
  phrase.classList.add('text');

  const copy = document.createElement('div');
  copy.classList.add('text')
  const copyText = document.createElement('p');
  copyText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..';

  copy.appendChild(copyText);
  container.appendChild(logo);
  container.appendChild(name);
  container.appendChild(phrase);

  return container;
}

export { home }