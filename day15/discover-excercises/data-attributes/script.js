
// Here I am calling/finding all the elements with .alert class
const arrayOfAlerts = document.querySelectorAll('.alert')
// above what happened is that they are turned into arrays, it turns then into an array as can be seen by console.log them

// Here I am looping through them, picking then one by one and getting the data type for each with getAttribute and then creating the whole class name from it, bcs its not complete, finally adding it using classList.add
for (let item of arrayOfAlerts) {
    let dataType = item.getAttribute('data-type')
    let classDataType = `alert--${dataType}`
    item.classList.add(classDataType)
}
