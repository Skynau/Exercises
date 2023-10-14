const url = 'https://classes.codingbootcamp.cz/assets/classes/api/departures.php'
const urlWithDelay = 'https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php'

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


const myBtn = document.createElement('button')
myTable.appendChild(myBtn)
myBtn.textContent = 'Get departure times'

const loadingImg = document.createElement('img')
myTable.appendChild(loadingImg)
loadingImg.setAttribute('src', '/src/img/Spinner-1s-200px.svg')
loadingImg.setAttribute('alt', 'loading icon')

myBtn.addEventListener('click', () => {
    loadDepartureTimes()
    loadingImg.className = 'img-appear'
        setTimeout(() => {
            myBtn.className = 'myBtn'
            loadingImg.className = ''
            }, 3000)
    }
)


const loadDepartureTimes = async () => {
    const response = await fetch(urlWithDelay);
    const departureTimes = await response.json();
    departureTimes.forEach(element => {
    const myTr = document.createElement('tr')
    myTbody.appendChild(myTr)
    const myTd = document.createElement('td')
    myTr.appendChild(myTd)
    myTd.textContent = `${element.time.hrs} : ${element.time.mins}`
    });

    console.log(departureTimes);
    console.log(departureTimes[1].time.hrs);
}




// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];







