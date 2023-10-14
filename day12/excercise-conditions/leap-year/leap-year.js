const question = prompt('Give me a year');

const leftOver = Number(question) % 4;
const leftOver100 = Number(question) % 100;
const leftOver400 = Number(question) % 400;

// if (leftOver100 === 0) {
//     if (leftOver400 === 0) {
//         document.write('It is a leap year');
//     } else {
//         document.write('This is not a leap year');
//     }
// } else if (leftOver === 0) {
//     document.write('It is a leap year');
// } else {
//         document.write('This is not a leap year');
//     }

//leap year 3:
if (leftOver400 === 0 || (leftOver === 0 && leftOver100 !== 0)) {
    document.write('It is a leap year');
} else {
    document.write('This is not a leap year');
}



