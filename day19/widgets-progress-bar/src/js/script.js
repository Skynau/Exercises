import { Value } from 'sass';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';


const firstProgressBar = new ProgressBar(0, 17, 'red_knob')
document.body.appendChild(firstProgressBar.element)

const secondProgressBar = new ProgressBar(0, 17, 'green_knob')
document.body.appendChild(secondProgressBar.element)

const thirdProgressBar = new ProgressBar(0,17, 'blue_knob')
document.body.appendChild(thirdProgressBar.element)


const firstButton = new Button()
document.body.appendChild(firstButton.element)
const colorButton = firstButton.element

//THis was a real pain: the rgb is defined by three strings that are numbers, but the point is that if I put the number * 15 outside of the curly braces it does not work and it is basicly multiplying a string
colorButton.addEventListener('click',() => {
    // console.log(typeof ${firstProgressBar.value});
    document.body.style.backgroundColor = `rgb(${firstProgressBar.value* 15}, ${secondProgressBar.value* 15}, ${thirdProgressBar.value * 15})`
})




