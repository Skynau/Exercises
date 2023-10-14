import { Product } from "./classes/Products"

const classProducts = [
    new Product('banana', 0.3, 7),
    new Product('apple', 0.15, 3),
    new Product('ketchup', 2.3, 5),
    new Product('bread', 0.25, 4),
    new Product('pickles', 3, 6),
    new Product('sausages', 3.5, 2),
    new Product('mustard', 0.8, 1)
]

console.log(classProducts);

const myBody = document.querySelector('body')
const div = document.createElement('div')
myBody.appendChild(div)
console.log(myBody);
console.log(classProducts[1].name);

classProducts.forEach(element => {
    const newDiv = document.createElement('div')
    newDiv.className = 'item'
    newDiv.innerHTML = `${element.name}<br>${element.price}`
    div.appendChild(newDiv)
    const myBtn = document.createElement('button')
    myBtn.className = 'yep-its-a-button'
    myBtn.innerText = 'Buy'
    div.appendChild(myBtn)
    const quantityELement = document.createElement('div')
    div.appendChild(quantityELement)
    quantityELement.textContent = element.quantity + ' in stock'
    myBtn.addEventListener('click', () => {
        element.sell()
        quantityELement.textContent = element.quantity + ' in stock'
    })
});

// classProducts.forEach(element => {
//     const newDiv = document.createElement('div')
//     newDiv.className = 'item'
//     newDiv.innerHTML = `${element.name}<br>${element.price}<br>${element.quantity}`
//     div.appendChild(newDiv)
//     const myBtn = document.createElement('button')
//     myBtn.className = 'yep-its-a-button'
//     myBtn.innerText = 'Buy'
//     div.appendChild(myBtn)
//     myBtn.addEventListener('click', () => {
//         element.sell()
//         element.quantity. = element.quantity + 'in stock'
//     })
// });



