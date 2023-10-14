const pressButton = document.querySelector('.green')
const changeStop = document.querySelector('.stop')
const changeWalk = document.querySelector('.walk')
pressButton.addEventListener('click', (event) => {
    changeStop.innerHTML = `<img style="width: 200px;" src="/crosswalk/img/stop-off.svg" alt="stop-off">`;
    changeWalk.innerHTML = `<img style="width: 200px;" src="/crosswalk/img/walk-on.svg" alt="walk-on">`;
    setTimeout(() => {
        changeStop.innerHTML = `<img style="width: 200px;" src="/crosswalk/img/stop-on.svg" alt="stop-on">`;
        changeWalk.innerHTML = `<img style="width: 200px;" src="/crosswalk/img/walk-off.svg" alt="walk-off">`;
    }, 5000);
})