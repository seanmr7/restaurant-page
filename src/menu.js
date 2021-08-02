function menu() {
  let content = document.getElementById('content');
  let menuContainer = document.createElement('div');
  menuContainer.classList.add("menu_container")

  let menuHeaderDivs = [];
  let menuHeaderText = ["Appetizers", "Entrées", "Drinks"];
  menuHeaderText.forEach(header => {
    let headerDiv = document.createElement('h1');
    headerDiv.classList.add('menu-header')
    headerDiv.innerText = header

    menuHeaderDivs.push(headerDiv)
  })

  let appetizerText = ["$15 | Fish Taco Bites", "Like a fish taco, but miniature!", "$9 | Sizzling Scallops", "Seared scallops topped with chorizo, served sizzling!", "$12 | Calamari", "Fried squid with tartar sauce!", "$2 | Crazy Coconut Shrimp", "Fried coconut shrimp topped off with a ghost pepper tomato dip!"];
  let appetizerContainer = [];
  let entreeText = ["$35 | One Whole Lobster", "Its a whole lobster. Side of potatoes!", "$24 | More Calamari", "Twice as much calamari as the appetizer and three times the sauce!", "$45 | Serf and Terf", "Three lobster tails on top of a steak!", "$18 | Shrimp Fettucine Alfredo", "Fettucini pasta, alfredo sauce, basil, and shrimp!"];
  let entreeContainer = [];
  let drinksText = ["$5 | SeaWater", "Fresh from the ocean!", "$6 | Soda-Pop", "Generic!"];
  let drinksContainer = [];

  dishContainers(appetizerContainer, appetizerText)
  dishContainers(entreeContainer, entreeText)
  dishContainers(drinksContainer, drinksText)

  let containers = [appetizerContainer, entreeContainer, drinksContainer];
  
  containers.forEach((arr, index) => {
      menuContainer.appendChild(menuHeaderDivs[index]);
      arr.forEach(dish => { menuContainer.appendChild(dish); })
    })

  content.appendChild(menuContainer)
}

function dishContainers(containerArr, textArr) {
  let leftCol = document.createElement('div');
  leftCol.classList.add('left-col')
  let rightCol = document.createElement('div');
  rightCol.classList.add('right-col')

  textArr.forEach((dishText, index) => {
    let div = document.createElement('div');
    div.innerText = dishText
    if (index % 2 == 0) {
      div.classList.add('dish-name')
    } else { div.classList.add('description') }
    if (index < (textArr.length/2)) {
      leftCol.appendChild(div)
    } else (rightCol.appendChild(div))
  })
  containerArr.push(leftCol, rightCol)
}

export { menu }