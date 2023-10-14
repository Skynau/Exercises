const populationPilsner2000 = 551281
const populationPilsner2001 = populationPilsner2000 * (1-0.014)
const populationPilsner2100 = populationPilsner2001 * ((1-0.014) ** 99)
console.log(populationPilsner2100);