// const timer = document.querySelector('.timer')
// const startButton = document.querySelector('button')

// timer.textContent = 60

// startButton.addEventListener('click', () => {
//     const timerFunction = setInterval(() => {
//     timer.textContent--
//     if (timer.textContent <= 0) {
//         const timeIsUp = document.createElement('p')
//         timeIsUp.textContent = `It's time`
//         timer.appendChild(timeIsUp)
//         clearInterval(timerFunction)
//     }
// }, 100)
// })

//Second part:
const startButton = document.querySelector('button')
const divMinutes = document.querySelector('.minutes')
const divSeconds = document.querySelector('.seconds')
const inputSeconds = document.querySelector('#seconds')
const inputMinutes = document.querySelector('#minutes')
const p = document.querySelector('p')



startButton.addEventListener('click', () => {
    console.log(inputMinutes.value);
    let secondsAmount = Number(inputSeconds.value)
    let minutesAmount = Number(inputMinutes.value)
    let totalSecondssAmount = minutesAmount*60 + secondsAmount
    const timerFunction = setInterval(() => {
            totalSecondssAmount--
            divMinutes.textContent = Math.floor(totalSecondssAmount/60)
            divSeconds.textContent = totalSecondssAmount % 60
            if (totalSecondssAmount <= 0) {
                p.textContent = `It's time`
                clearInterval(timerFunction)
            }
        }, 100)
})
