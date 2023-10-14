// SALARY FUNCTION

// const calcSalary = (pay, hours, days) => {
//     return pay * hours * days
// }

// const salary = calcSalary(10, 8, 20)
// const tax = 0.15

// const taxed_salary = (salary, tax) => {
//     return salary * (1-tax);
// }

// console.log(taxed_salary(salary, tax));

// MAXIMUM OF 3 VALUES:

// const max3 = (a, b, c) => {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else if (c > a && c > b) {
//         return c
//     } else {
//         return 'seems there is a match'
//     }
// }

// console.log(max3(10, 8, 5));

//SPREAD OF 3 NUMBERS:

const spread3 = (a, b, c) => {
    if (a > b && a > c && b > c) {
        return a - c
    } else if (a > b && a > c && c > b) {
        return a - b
    } else if (b > a && b > c && a > c) {
        return b - c
    } else if (b > a && b > c && c > a) {
        return b - a
    } else if (c > a && c > b && a > b) {
        return c - b
    } else if (c > a && c > b && b > a) {
        return c - a
    } else {
        return 'seems there is a match'
    }
}

console.log(spread3(1, 5, 10));