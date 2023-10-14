const loadArticles = async (category) => {
    console.log(category);
    //Learning point: dont have to make it so long but can do it shorter like here, notice that the loadarticle is already async and that is enough
    // const loadCategory = async () => {
    const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`);
    const data = await response.json();
    const div = document.querySelector('div')
    div.innerHTML = ''
    data.data.channel.item.forEach(element => {
        const ul = document.createElement('ul')
        ul.innerHTML = element.title
        div.appendChild(ul)
        const link = document.createElement('li')
        link.innerHTML = element.description
        ul.appendChild(link)
    });
    console.log(data);
}


document.addEventListener('DOMContentLoaded', () => {
    const loadData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
    const data = await response.json();
    const nav = document.querySelector('.navigation')
    data.data.forEach(element => {
        const createdLink = document.createElement('a')
        createdLink.className = "link"
        createdLink.setAttribute('href', '#')
        createdLink.textContent = element
        //Learning point: bellow it had to call empty function that is then defined with the loadArticles, they can then be anywhere, better up apparently
        createdLink.addEventListener('click', () => loadArticles(element))
        nav.appendChild(createdLink)
    });
    }
    loadData()
})

