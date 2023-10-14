let theButton = document.getElementById('theButton');
let theText = document.querySelectorAll('.top-5__header');
theButton.onclick = function () {
    for (let x of theText) {
        x.classList.toggle('top-5__header--colorized');
    }
}; 