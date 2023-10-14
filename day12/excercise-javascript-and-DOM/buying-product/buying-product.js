
const changeButton = () => {
const changeThis = document.querySelector('button')
changeThis.className = 'red'
const itemsSelect = document.querySelector('input').value
changeThis.innerHTML = `${itemsSelect} items in cart`
}