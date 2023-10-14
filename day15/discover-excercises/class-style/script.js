const alerts = [
    'Unable to access resource. User is not authorized.',
    'You are missing proper user permissions.',
    'Administrators have been notified of this action.',
    'Please remain where you are, police is on the way.'
];

//Here I realised I have to create all the divs etc inside Javascript, so started with the main Div element into which all the alert related elements are inputted:

const div = document.createElement('div');
div.classList.add('alerts')
document.body.appendChild(div)

//This is the loop effect of for (let item of array) that goes through the array type of object and has the desired affect of building the 'html like' body of elements:

for (let item of alerts) {
    const div2 = document.createElement('div')
    div2.classList.add('alert')
    div2.classList.add('alert--error')
    div.appendChild(div2)
    const div3 = document.createElement('div')
    div3.classList.add('alert__text')
    div3.innerText = item
    div2.appendChild(div3)
    const div4 = document.createElement('div')
    div4.classList.add('allert__close')
    div4.innerHTML = `&times;`
    div2.appendChild(div4)
    div3.addEventListener('click', () => {
        div3.style.backgroundColor = 'green';
        div3.style.color = 'white';
    })
    div4.addEventListener('click', () => {
        div3.style.display = 'none';
    })
    div2.addEventListener('click', () => {
        div2.classList.toggle('alert--seen')
    })
}

console.log(div);


