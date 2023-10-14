const imagesGallery = document.querySelectorAll('img')
const arrayIG = Array.from(imagesGallery)
// arrayIG.forEach((value) => {
//     console.log(value);
// })
// arrayIG.forEach((value) => {
//     const srcAtr = value.getAttribute('src')
//     console.log(srcAtr);
// })
// arrayIG.forEach((value) => {
//     const altAtr = value.getAttribute('alt')
//     console.log(altAtr);
// })

const urls = []

arrayIG.forEach((value) => {
    // const url = value.getAttribute('src')
    urls.push(value.getAttribute('src'))
})

console.log(urls);

const alts = []

arrayIG.forEach((value) => {
    alts.push(value.getAttribute('alt'))
})

// console.log(alts);

// console.log(arrayIG.length)

// const urls3 = urls.slice(0, 3)

// console.log(urls3);

// const first = []

// for (let i = 0; i < urls.length; i++) {
//     first.push(urls[i]);
//     if (i >= 2) {
//         break
//     }
// }

// console.log(first);

// const urlsEnd3 = urls.slice(-3)

// console.log(urlsEnd3);

// const last = []

// for (let i = 0; i < urls.length; i++) {
//     if (i <= 2) {
//         continue
//     }
//     last.push(urls[i])
// }

// console.log(last);

console.log(alts);

const catAlts = alts.filter((alt) => {
    const string = alt
    if (string.match(/cat/i)) {
        return true
    } else {
        return false
    }
})

console.log(catAlts);

const ul = document.querySelector('.list-of-photos__list')
for (let i = 0; i < alts.length; i++) {
    ul.innerHTML += `<li>${alts[i]}</li>`
}