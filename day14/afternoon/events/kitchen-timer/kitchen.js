// const timer = document.querySelector('h1');
// const message = document.querySelector('h2');
// let i = 60;

// CORRECT SOLUTION:
// const counter = setInterval(() => {
//     timer.innerHTML = `${i} seconds`
//     if (i <= 0) {
//         clearInterval(counter);
//         message.innerHTML = `Time is up`
//     }
//     i--;
// }, 100)



let intitialMinutes = document.querySelector('input[name="timerMinutes"]')
let initialSeconds = document.querySelector('input[name="timerSeconds"]')
let outputMinutes = document.querySelector('.minutes')
let outputSeconds = document.querySelector('.seconds')
const myBtn = document.querySelector('button')
// myBtn.addEventListener('click', () => {
//     let x = intitialMinutes.value
//     outputMinutes.innerHTML = x
//     console.log(x);
// })

myBtn.addEventListener('click', () => {
    let m = Number(intitialMinutes.value)
    let s = Number(initialSeconds.value)
    let total = (m * 60) + s;
    let seconds = total % 60
    let minutes = (total - seconds) / 60
    const counter = setInterval(() => {
        total--
        outputMinutes.innerHTML = minutes
        outputSeconds.innerHTML = seconds
        if (total <= 0) {
            clearInterval (counter)
        }
    }, 1000)
})



// myBtn.addEventListener('click', () => {
//     let x = intitialMinutes.value
//     outputMinutes.innerHTML = x
//     const counterMinutes = setInterval(() => {
//         x--;
//         outputMinutes.innerHTML = x
//         if (x <= 0) {
//             clearInterval(counterMinutes);
//         }
//     }, 60000);
//     let y = initialSeconds.value
//     outputSeconds.innerHTML = y
//     const counterSeconds = setInterval(() => {
//         y--;
//         outputSeconds.innerHTML = y
//         if (y <= 0) {
//             y = 60;
//         }
//     }, 1000);
// })


// for (let i = 60; i <= 0; i--) {
//     setInterval(() => {
//         timer.innerHTML = i + 'seconds'
//         }, 1000)   
// }

// for (let i = 60; i >= 0; i--) {
//     (function(i) {
//         setInterval((i) => {
//             timer.innerHTML = `${i} seconds`
//         }, 1000)  
//     })
    
// }


// for (var i = 0, len = list.length; i < len; i += 1) {
//     (function(i) {
//         setInterval(function() {
//             list[i] += 10;
//             console.log(i + "=>" + list[i] + "\n");
//         }, 5000)
//     })(i);
// }
