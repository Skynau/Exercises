const basePrice = 12
const free = 0.00;
const discount35 = 0.35;
const discount65 = 0.65;
const discount0 = 1.00;
const discount50 = 0.50;

const checkMyPrice = () => {
    const ageInput = document.querySelector('input[name=ageInfo]');
    const ageTyped = ageInput.value;
    switch (true) {
        case (ageTyped < 6):
            const pricePreSchool = basePrice * free;
            const messagePreSchool = document.querySelector('h4');
            messagePreSchool.innerHTML = pricePreSchool.toFixed(2) + ' euros';
            break;
        case (ageTyped < 16):
            const priceSchool = basePrice * discount35;
            const messageSchool = document.querySelector('h4');
            messageSchool.innerHTML = priceSchool.toFixed(2) + ' euros';
            break;
        case (ageTyped < 27):
            const priceHighSchool = basePrice * discount65;
            const messageHighSchool = document.querySelector('h4');
            messageHighSchool.innerHTML = priceHighSchool.toFixed(2) + ' euros';
            break;
        case (ageTyped < 65):
            const priceAdult = basePrice * discount0;
            const messageAdult = document.querySelector('h4');
            messageAdult.innerHTML = priceAdult + ' euros';
            break;
    
        default:
            const priceSenior = basePrice * discount50;
            const messageSenior = document.querySelector('h4');
            messageSenior.innerHTML = priceSenior + ' euros';
            break;
    }
}
