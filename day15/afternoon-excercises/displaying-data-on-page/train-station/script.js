// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// const myBody = document.body
// // const div = document.createElement('div')
// // myBody.appendChild(div)
// const myUl = document.createElement('ul')
// myBody.appendChild(myUl)
// //Above I put to comment the things that were related to step number 3 to make space for step 4
// //Bellow its a loop through each given element in the array, using math made it into human readable digi time, created li inside ul for each item and displayd it

// for (let item of departures) {
//     let realTimeHours = Math.floor(item / 60)
//     let realTimeMinutes = item % 60
//     let realTime = `${realTimeHours}:${realTimeMinutes}`
//     let myLi = document.createElement('li')
//     myUl.appendChild(myLi)
//     myLi.innerHTML = `${realTime}`
// }

//Continuation of second part:

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

const myBody = document.body
const myTable = document.createElement('table')
myBody.appendChild(myTable)
const myThead = document.createElement('thead')
myTable.appendChild(myThead)
const myTh = document.createElement('th')
myThead.appendChild(myTh)
myTh.textContent = 'Time'
const myTbody = document.createElement('tbody')
myTable.appendChild(myTbody)



for (let item of departures) {
    let realTimeHours = Math.floor(item / 60)
    let realTimeMinutes = item % 60
    let realTime = `${realTimeHours}:${realTimeMinutes}`
    const myTr = document.createElement('tr')
    myTbody.appendChild(myTr)
    const myTd = document.createElement('td')
    myTr.appendChild(myTd)
    myTd.textContent = realTime
}

