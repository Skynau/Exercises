const question = prompt('What year were you born?')
const convertNumber = Number(question)
const age = 2023 - convertNumber
const myBody = document.querySelector('body')
myBody.innerHTML = `Your age is ${age}`