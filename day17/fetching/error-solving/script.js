const url = 'https://classes.codingbootcamp.cz/aets/classes/602/guardian.php'



// const loadData = async () => {
//     try {
//         //task1
//         //task2
//     } catch (e) {

//     }
//     const response = await fetch(url);
    
//     const resultofAwaitedJSONCall = await response.json()

//     //some logic to be executed
//     console.log(resultofAwaitedJSONCall)
// }

//debugging:

const loadData = async () => {
    try {
        const response = await fetch(url);
        const resultofAwaitedJSONCall = await response.json()

        console.log(resultofAwaitedJSONCall)
    } catch (e) {
        console.log('there was an error', e);
    } finally {
        console.log('executed everytime');
    }//even if it fails//

    //some logic to be executed
}

loadData()