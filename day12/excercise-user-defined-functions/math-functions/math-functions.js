//BASIC MATH FUNCTIONS:

// const calcSquare = (num) => {
//     return num * num
// }

// console.log(calcSquare(5));

// const calcHypothenuse = (a, b) => {
//     return Math.sqrt((a * a) + (b * b))
// }

// console.log(calcHypothenuse(3, 3));

// const calcAbs = (num) => {
//     return Math.abs(0 - num)
// }

// console.log(calcAbs(-5))

//EMAIL FROM LOGIN:

// const loginReply = prompt('Hey, tell me login and I give you your email')

// const emailFromLogin = () => {
//     return loginReply + '@covidconspiracy.org'
// }

// document.write(emailFromLogin())

//LOGIN FROM NAME

// const firstName = prompt('first name')
// const secondName = prompt('second name')

// const loginFromName = () => {
//     const firstPart = firstName.slice(0, 3);
//     const secondPart = secondName.slice(0, 4);
//     const beforeLowerCase = secondPart + firstPart;
//     return beforeLowerCase.toLocaleLowerCase()
// }

// document.write(loginFromName())

//EMAIL FROM NAME

const firstName = prompt('first name')
const secondName = prompt('second name')
const loginFromName = () => {
    const firstPart = firstName.slice(0, 3);
    const secondPart = secondName.slice(0, 4);
    const beforeLowerCase = secondPart + firstPart;
    const almostThere =  beforeLowerCase.toLocaleLowerCase()
    return almostThere + '@covidconspiracy.org'
}

document.write(loginFromName())