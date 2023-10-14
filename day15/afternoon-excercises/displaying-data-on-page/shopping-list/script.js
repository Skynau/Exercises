const shoppingList = ['bananas', 'apples', 'carrots', 'potatoes', 'milk']

const locateDiv = document.querySelector('#list')

//Bellow, its not exactly as per instructions, not possible to do the innerHTML because its an object aparently
shoppingList.forEach((item) => {
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerText = item
    locateDiv.appendChild(divItem)
    // console.log(typeof(divItem));
    // locateDiv.innerHTML = divItem
})

console.log(locateDiv);

