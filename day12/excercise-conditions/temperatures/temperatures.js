
const getHighestTemp = () => {
    const amTemp = document.querySelector('input[name=morningTemp]');
    const valueAM = amTemp.value;
    const pmTemp = document.querySelector('input[name=afternoonTemp]');
    const valuePM = pmTemp.value;
    const nightTemp = document.querySelector('input[name=midnightTemp]');
    const valueNight = nightTemp.value;

    if (valueAM >= valuePM && valueAM >= valueNight) {
        const valueA = document.querySelector('h4');
        valueA.innerHTML = valueAM;
    } else if (valuePM >= valueAM && valuePM >= valueNight) {
        const valueB = document.querySelector('h4');
        valueB.innerHTML = valuePM;
    } else {
        const valueC = document.querySelector('h4');
        valueC.innerHTML = valueNight;
    }
}