const toggleLightbulb = () => {
    const lightbulb = document.querySelector('.lightbulb');

    if (lightbulb.className === 'lightbulb') {
        lightbulb.className = 'lightbulb lightbulb_on';
    } else {
        lightbulb.className = 'lightbulb';
    }
}