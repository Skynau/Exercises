//Winde glasses
// let glassTime = 5;

// let hour = 60;

let glassPerHour = (glassTime, hour) => {
    return hour / glassTime;
}


console.log(glassPerHour(5, 60));

let glassPerDay = (glassTime, hour, day) => {
    return day * 7 * hour / glassTime;
}

console.log(glassPerDay(5, 60, 1));

//Tiling hallway

let amountOfTiles = (sideA, sideB, tileSize) => {
    return sideA * sideB / (tileSize*tileSize);
}

console.log(amountOfTiles(6, 2.5, 0.5));

//Salary

const salary = (hourlyWage, hoursPerDay, daysInMonth) => {
    return hourlyWage * hoursPerDay * daysInMonth
}

let brutto = salary(12, 8, 21)

console.log(brutto);

let tax = 0.15

const afterTax = brutto * (1-tax)

console.log(afterTax);

const salaryAfterTax = (pay, hours, days, tax) => {
    let netto = pay * hours * days * (1-tax);
    return netto
}

console.log(salaryAfterTax(12, 8, 21, 0.15));

//Mortgage

let pricePerM2 = 6688;
let dreamApt = 80
let cost = pricePerM2 * dreamApt

const costOfApt = (priceM2, areaDreamApt) => {
    let totalCost = priceM2 * areaDreamApt;
    return totalCost;
}

let totalCost = costOfApt(6688, 80)

console.log(totalCost);

const conversionCZK = (amount, rate) => {
    return amount * rate;
}

let exchangeRate = 25

let totalCostCZK = conversionCZK(totalCost, exchangeRate)

console.log(totalCostCZK);

const calcRepaymentPeriod = (amount, mortgagePercent, repayment) => {
    return amount * mortgagePercent / repayment / 12;
}

let mortgagePercent = 0.85;
let repayment = 800

const years = calcRepaymentPeriod(totalCost, mortgagePercent, repayment)

console.log(years);
