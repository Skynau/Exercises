
const shoppingList = [
    'spagetti',
    'pasta',
    'onion',
    'salami' 
]
console.log(shoppingList);

console.log(shoppingList[3]);

console.log(shoppingList[0]);

//adds element to index on position 2
shoppingList[2] = 'red onion';

console.log(shoppingList);

shoppingList[4] = 'potato';

console.log(shoppingList);

//adds element to index 
shoppingList[10] = 'olive oil';

console.log(shoppingList);

shoppingList.push('salt')

console.log(shoppingList);

shoppingList.unshift('cheese')

console.log(shoppingList);

shoppingList.splice(2, 0, 'pepper')

console.log(shoppingList);

shoppingList.splice(2, 3, 'sugar')

console.log(shoppingList);

shoppingList.splice(2, 0, 'cream', 'potato', 'garlic')

console.log(shoppingList);

shoppingList.splice(8, 5);

console.log(shoppingList);

//removed the element at the END of array
shoppingList.pop()

console.log(shoppingList);

//remove element at beginning of array
shoppingList.shift()

console.log(shoppingList);

// both above can be used to represent a variable, and also splice actually
const removedEnd = shoppingList.pop();

const removedBeginning = shoppingList.shift();

let item = null
while (item !== undefined) {
    item = shoppingList.shift();
    console.log(item);
}


//remove all elements from an aeeay
// shoppingList.splice(0, shoppingList.length)
