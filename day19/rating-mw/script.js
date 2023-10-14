const textRating = document.querySelector('.rating__value')
const stars = document.querySelectorAll('.rating__star')


stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        let ratingNumber = index + 1
        textRating.textContent = `${ratingNumber}`
        // star.className = 'rating__star'
        stars.forEach((starInside, indexInside) => {
            starInside.classList.remove = 'rating__star--on'
            if (indexInside <= index) {
                    starInside.classList.add('rating__star--on')
            }
        })
        
        
        console.log('The stars NodeList:')
        console.log(stars)
        console.log('The clicked star element:')
        console.log(star)
        console.log('The index of the clicked star in the NodeList:')
        console.log(index)
        console.log('Rating expressed by text:')
        console.log(textRating)
        console.log('-------------------------------------------------------------------------')
    })
})