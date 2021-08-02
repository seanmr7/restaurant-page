function clearContent(content) {
  content.innerHTML = ''
}

function highlightNav(navItem) { 
  let navItems = document.querySelectorAll('li');
  navItems.forEach(item => {
    if (item !== this) {
      item.classList.remove('nav-active')
    }
  })
  navItem.classList.add('nav-active')
}

export { clearContent, highlightNav }