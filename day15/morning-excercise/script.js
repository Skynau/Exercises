const padlock = document.querySelector('.padlock')
const message = document.querySelector('.text')
padlock.addEventListener('mouseenter', () => {
    message.className = "text text_visible"
})
padlock.addEventListener('mouseleave', () => {
    message.className = "text"
})
padlock.addEventListener('click', () => {
    message.className = "text text_visible"
    padlock.className = "padlock padlock_clicked"
    padlock.addEventListener('mouseleave', () => {
    message.className = "text text_visible"})
})