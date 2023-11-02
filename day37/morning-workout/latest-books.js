const bookData = "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"

const loadData = async () => {
    const response = await fetch(bookData);
    const data = await response.json();
    const list = document.getElementById('latest-books');
    data.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book.title;
        list.appendChild(li);
    });
    console.log(data);
}

loadData();