const cart = {
    total: {
        amount: 91.6,
        currency: 'CZK'
    },
    items: [
        {
            name: 'Apples',
            amount: '2kg',
            price: 62.6
        },
        {
            name: 'Cinnamon',
            amount: 1,
            price: 29
        }
    ]
}

const stringifiedCart = JSON.stringify(cart)
const shopping_cart = JSON.parse(stringifiedCart)
// console.log(shopping_cart);




// let cheapest = null;
// shopping_cart.items.forEach((item) => {
//     if (cheapest === null || item.price < cheapest.price) {
//         cheapest = item;
//         // console.log(cheapest.price)
//     }
// }
// )



const myBtn = document.querySelector('.remove-cheapest')
myBtn.addEventListener('click', () => {
    let cheapest = null;
    let cheapest_index = null;
    shopping_cart.items.forEach((item, index) => {
       if (cheapest === null || item.price < cheapest.price) {
          cheapest = item;
          cheapest_index = index;
       }
    
    })
    shopping_cart.items.splice(cheapest_index, 1)
    displayItems(shopping_cart)
    // console.log(shopping_cart)
}
)


const myUl = document.querySelector('.items')
const displayItems = (object) => {
    myUl.innerHTML = ''
    for (i = 0; i < object.items.length; i++) {
        const liCreate = document.createElement('li')
        liCreate.classList = 'items__item'
        liCreate.textContent = `${object.items[i].name} (${object.items[i].amount})`
        myUl.appendChild(liCreate)
    }
}

displayItems(shopping_cart)

const addItemButton = document.querySelector('.add-item')
addItemButton.addEventListener('click', () => {
    let name = document.querySelector('input[name="name"]').value
    let amount = document.querySelector('input[name="amount"]').value
    let price = document.querySelector('input[name="price"]').value
    if (name != '' && amount != '' && price != '') {
    const objectOfItem = {'name': name, 'amount': amount, 'price': price}
    shopping_cart.items.push(objectOfItem)
    }
    displayItems(shopping_cart)
    // let nameEmpty = document.querySelector('.item-name-input')
    // nameEmpty.value = ''
    // let amountEmpty = document.querySelector('.item-amount-input')
    // amountEmpty = ''
    // let priceEmpty = document.querySelector('.item-price-input')
    // priceEmpty = ''
    // Alternative:
    document.querySelector('.item-name-input').value = ''
    document.querySelector('.item-amount-input').value = ''
    document.querySelector('.item-price-input').value = ''
})



