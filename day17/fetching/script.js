const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php'

//The most simple way how to call fetch (its not in classes):
// fetch(url)

//Then to see the results:
// const resultOfFetch = fetch(url)
// console.log(resultOfFetch);


// Basilcy this part: await fetch(url); means await promise, because the fetch(url) is the object of promise,
// have to put await on both fetch and response
// all the logic and opreration with the data must be inside the loadData function, because its not availbale outside its scope
// const loadData = async () => {
//     console.log('C');
//     const response = await fetch(url);
    
//     const resultofAwaitedJSONCall = await response.json()
//     console.log('D')
//     console.log(resultofAwaitedJSONCall)
// }

// console.log('A');

// loadData()

// console.log('B');


//Then() approach:
const promise = fetch(url)
promise.then((response) => {
//     const responsePromise = response.json();

//     responsePromise.then((data) => {
//         console.log(data)
//     })
//above works, or shorter verion:
    response.json().then((data) => {
        console.log(data);
    })
})

//or even shorter:
fetch(url).then((response) => {
//     const responsePromise = response.json();

//     responsePromise.then((data) => {
//         console.log(data)
//     })
//above works, or shorter verion:
    response.json().then((data) => {
        console.log(data);
    })
})

//Error colving: