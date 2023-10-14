const fruits = [
    {
        name: 'apple',
        count:  4
    },
    {
        name: 'pear',
        count:  2
    },
    {
        name: 'banana',
        count:  3
    },
    {
        name: 'orange',
        count: 2
    },
    {
        name: 'mango',
        count: 1
    }
];

console.log(fruits);

//looping with a for loop
for (let i = 0; i < fruits.length; i++) {
    const addItem = document.querySelector('.fruits')
    addItem.innerHTML += `<li>${fruits[i].name}</li>`;
}