const weather = prompt('Say the weather, get the dresscode')

const adviceClothing = (name) => {
    if (name == 'sunny') {
        console.log('Use sunscreen');
    } else if (name == 'windy') {
        console.log('Wear a coat');
    } else if (name == 'rainy') {
        console.log('Bring an umbrella');
    } else {
        console.log('Dress accordingly');
    }
}
console.log(adviceClothing(weather));


// if (weather == 'sunny') {
//         console.log('Use sunscreen');
//     } else if (weather == 'windy') {
//         console.log('Wear a coat');
//     } else if (weather == 'rainy') {
//         console.log('Bring an umbrella');
//     } else {
//         console.log('Dress accordingly');
//     }

// switch (weather) {
//     case 'sunny':
//         console.log('Use sunscreen')
//         break;
//     case 'windy':
//         console.log('Wear a coat')
//         break;
//     case 'rainy':
//         console.log('Bring an umbrella')
//         break;
//     default:
//         console.log('Dress accordingly')
//         break;
//     }


