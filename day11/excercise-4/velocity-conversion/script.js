// let mph = 60;
// let km = mph * 1.609344
// let rounded = Math.round(km)
// console.log(rounded);

// const question = prompt('give me velocity in mph')
// const convertNumeber = Number(question)
// const convertKm = convertNumeber * 1.609344
// console.log(convertKm);

//Currency exchange:
// const question = prompt('give me value in euros, I tell you czk')
// const czk = question * 25.695
// const roundCzk = Math.round(czk)
// const myBody = document.querySelector('body')
// myBody.innerHTML = roundCzk

//SMS messages:

// const question = prompt('Write here your message')
// const lengthOfMessage = question.length
// const amountOfMsgs = Math.ceil(lengthOfMessage/160)
// console.log(amountOfMsgs);

//celsius to fahrnheit:
// const question = prompt('tell me temperature in fahrnheit')
// const replaceCommaDot = question.replace(/,/g, '.')
// const numberQuestion = Number(replaceCommaDot)
// const celsius = (numberQuestion - 31) * (5/9)
// console.log(celsius);


//dice roll:
const rollDice = Math.ceil(Math.random()*6)
const myBody = document.querySelector('body')
myBody.innerHTML = rollDice


