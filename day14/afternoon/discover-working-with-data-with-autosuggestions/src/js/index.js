import { data } from "./data";

const dataParsed = JSON.parse(data)

// console.log(dataParsed);

const container = document.createElement('div')
document.querySelector('body').appendChild(container)
const nameList = document.createElement('ul')
nameList.className = 'nameList'
document.querySelector('div').appendChild(nameList)

const createList = () => {
    dataParsed.forEach(element => {
        const nameListItem = document.createElement('li')
        nameListItem.className = 'nameListItem'
        document.querySelector('.nameList').appendChild(nameListItem)
        nameListItem.innerHTML = `
            ${element.name}
                <ul>
                    <li>${element.age}</li>
                    <li>${element.children}</li>
                    <li>${element.citizenship}</li>
                    <li>${element.country}</li>
                    <li>${element.networth}</li>
                    <li>${element.self_made}</li>
                    <li>${element.source}</li>
                    <li>${element.status}</li>
                </ul>
            `
        
    });
}

createList()

const textInput = document.createElement('input')
textInput.setAttribute('type', 'text')
textInput.setAttribute('name', 'billionaresDirectory')
textInput.setAttribute('list', 'billionaresDirectory')
textInput.setAttribute('placeholder', "Billionare's name")
const label = document.createElement('label')
label.setAttribute('for', 'billionaresDirectory')
const body = document.querySelector('body')
body.insertBefore(textInput, container)
body.insertBefore(label, textInput)
label.textContent = 'Pick your billionare:   '
const dataList = document.createElement('datalist')
dataList.setAttribute('id', 'billionaresDirectory')
body.insertBefore(dataList, container)
dataParsed.forEach(element => {
    const option = document.createElement('option')
    option.textContent = element.name
    option.setAttribute('value', `${element.name}`)
    dataList.appendChild(option)
});
console.log(body);
console.log(dataList);


const inputTextFunction = () => {
    let inputValue = ""
    textInput.addEventListener('keyup', (event) => {
        container.innerHTML = ""
        inputValue = textInput.value
        dataParsed.forEach(element => {
            if ((element.name).toLowerCase().indexOf(inputValue) >= 0) {
                container.innerHTML += `
                ${element.name}
                    <ul>
                        <li>${element.age}</li>
                        <li>${element.children}</li>
                        <li>${element.citizenship}</li>
                        <li>${element.country}</li>
                        <li>${element.networth}</li>
                        <li>${element.self_made}</li>
                        <li>${element.source}</li>
                        <li>${element.status}</li>
                    </ul>
                `
            }     
        })
        // const letterMatching = dataParsed.filter((element, index) => {
        //     if (event.key === element.name) {

        //     }
        //     }
        // )
        console.log(event.key);
        console.log(inputValue);
    })
    console.log(inputValue);
    
}

inputTextFunction()




// const emptyListRecreation = () => {
//     if (textInput.value === '') {
//         createList()
//     } else {

//     }
// }

// emptyListRecreation()


