const employee = {
    first_name: 'Alfred',
    last_name: 'Pennyworth',
    age: 67,
    occupation: 'butler',
    place_of_residence: 'Gotham',
    photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
}

const fullName = employee['first_name'] + ' ' + employee['last_name']
const photoURL = employee['photo_url']
const occupation = employee['occupation']
const residence = employee['place_of_residence']
const age = employee['age']


const employeeHTML = `<div class="employee">
    <div class="employee__photo">
        <img src="${photoURL}" alt="${fullName}">
    </div>
    <div class="employee_info">
        <div class="employee__full-name">${fullName}</div>
        <div class="employee__occupation">${occupation}</div>
        <div class="employee__residence">Last known place of residence: ${residence}</div>
        <div class="employee__age">Age: ${age} years old</div>
    </div>
</div>`


const employees = document.querySelector('.employees')

employees.innerHTML = employeeHTML

// can be done also with apend child, but need to create the element using createElement, best with the approach of ''create element on the side from classes day 15
// employees.appendChild(div)