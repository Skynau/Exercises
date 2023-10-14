const data = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","London"],["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","Paris"],["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","New York"],["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","Nova Scotia"],["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg","Tokyo"],["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","Venice"]]

// const firstImg = data[0]
// const secondImg = data[1]
// const thirdImg = data[2]
// const fourthImg = data[3]
// const fourth

// for (let i = 0; i < data.length; i++) {
//     let stringImg = data[i];
//     let img = stringImg[0];
//     let text = stringImg[1];
//     let imgDiv = document.querySelector('.gallery');
//     imgDiv.innerHTML += `<div><img style="width:300px;" src="${img}" alt="${text}"></div><br><div><p>${text}</p></div>`
// }


//Alternative solution:

let galleryDiv = document.querySelector('.gallery');

data.forEach((image) => {
    galleryDiv.innerHTML += `<div class="image">
        <img src="${image[0]}" alt="${image[1]}">
        <div class="image__description">${image[1]}</div>
    </div>`44
})