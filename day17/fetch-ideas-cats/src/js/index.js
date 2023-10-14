const url = 'https://catfact.ninja/fact'

const myText = document.querySelector('.text')
const myP = document.createElement('p')
myText.appendChild(myP)
const myImg = document.querySelector('img')

const myBtn = document.querySelector('button')
myBtn.addEventListener('click', () => {
    getCatFacts()
    myImg.className = 'wide'
})

const getCatFacts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    myP.textContent = `"${data.fact}"`
}