const firstAngle = Number(prompt('angle 1'));
const secondAngle = Number(prompt('angle 2'));
const thirdAngle = Number(prompt('angle 3'));

if ((firstAngle + secondAngle + thirdAngle) == 180) {
    let reply = document.querySelector('h3')
    reply.innerHTML = 'This is a triangle'
} else {
    let reply = document.querySelector('h3')
    reply.innerHTML = 'Oops thats not a triangle'
}
