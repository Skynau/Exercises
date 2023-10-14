// Always include the call to the function!!
const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science'

const myDiv = document.createElement('div')
document.body.appendChild(myDiv)


const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const guardian = document.createElement('div')
    guardian.className = 'guardian'
    myDiv.appendChild(guardian)
    const guardianTitle = document.createElement('h1')
    guardian.appendChild(guardianTitle)
    guardianTitle.textContent = `${data.data.channel.image.title}`
    const guardianImage = document.createElement('img')
    guardian.appendChild(guardianImage)
    guardianImage.setAttribute('src', `${data.data.channel.image.url}`)
    guardianImage.setAttribute('alt', `${data.data.channel.image.title}`)
    const orderedList = document.createElement('ol')
    guardian.appendChild(orderedList)
    data.data.channel.item.forEach(element => {
        console.log(element);
        orderedList.innerHTML += `
        <li class="title">${element.title}</li>
        <ul>
        <li class="category">${element.category}</li>
        <li class="pub-date">${element.pubDAte}</li>
        <li class="link">${element.link}</li>
        <li class="descritpion">${element.description}</li>
        </ul>`
    });
    console.log();
    console.log(myDiv);
}

loadData()
