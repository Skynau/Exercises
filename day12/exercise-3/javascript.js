let have = 10000
const interest = 1.028
const max = 20000
let year = 2023

// while (have < max) {

    
//     have *= interest
//     year++;
//     console.log(year + ' ' + have.toFixed(2))

//     // year is 2013 because is 2023 + 8 years
//     if (year <= 2027) {
//         continue;
//     }
// }

// while (have < max) {
    
//     year++;

//     if (year < 2027) {
//         continue;
//     }

//     have *= interest
//     console.log(year + ' ' + have.toFixed(2))
// }

for (let i = 0; i < 6; i++) {
    have *= interest;
    console.log(year + ' ' + have.toFixed(2));
    year++
}