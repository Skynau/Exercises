const quote = document.querySelector('.quote')
const button = document.querySelector('button')
const img = document.querySelector('img')

const url = 'https://api.chucknorris.io/jokes/random'

button.addEventListener('click', () => {
    loadData()
})

const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = data.value
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2b9ni0-wh39lEukmYNUv8nLhfiY3JUTq5Q&usqp=CAU')
}

