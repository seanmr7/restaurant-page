
function header() {
  let header = document.createElement('header');
  header.id = "header"
  let list = document.createElement('ul');
  list.id = "nav-list"
  let home = document.createElement('li');
  let homeAnchor = document.createElement('a');
  homeAnchor.innerText = "Home"
  homeAnchor.href = "#"
  home.id = "homeNav"
  home.classList.add("nav", "nav-active")
  home.appendChild(homeAnchor)

  
  let menu = document.createElement('li');
  let menuAnchor = document.createElement('a');
  menuAnchor.innerText = "Menu"
  menuAnchor.href = "#"
  menu.id = "menuNav"
  menu.classList = "nav"
  menu.appendChild(menuAnchor)

  let contact = document.createElement('li');
  let contactAnchor = document.createElement('a');
  contactAnchor.innerText = "Contact"
  contactAnchor.href = "#"
  contact.id = "contactNav"
  contact.classList = "nav"
  contact.appendChild(contactAnchor)

  list.appendChild(home)
  list.appendChild(menu)
  list.appendChild(contact)

  header.appendChild(list)

  document.body.prepend(header)
}

function footer() {
  let footer = document.createElement('footer');
  footer.id = "footer"
  let list = document.createElement('ul');
  let iconLink = document.createElement('li');
  let firstLink = `<a href="https://smashicons.com/" title="Smashicons">SmashIcons</a>`
  let secondLink = `<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>`
  iconLink.innerHTML = `Lobster Icon made by ${firstLink} from ${secondLink}`

  list.appendChild(iconLink)
  footer.appendChild(list)
  document.body.appendChild(footer)
}

export {
  header,
  footer
}