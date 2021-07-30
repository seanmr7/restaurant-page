
function header() {
  let header = document.createElement('header');
  header.id = "header"
  let list = document.createElement('ul');
  let home = document.createElement('li');
  home.id = "homeBtn"
  home.innerText = "Home"
  
  let menu = document.createElement('li');
  menu.id = "menuBtn"
  menu.innerText = "Menu"

  let contact = document.createElement('li');
  contact.id = "contactBtn"
  contact.innerText = "Contact Us"

  list.appendChild(home)
  list.appendChild(menu)
  list.appendChild(contact)

  header.appendChild(list)

  document.body.appendChild(header)
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