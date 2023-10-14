const seeOrder = () => {
    const first = document.querySelector('input[name=swimmerOne]');
    const firstName = first.value;
    const timeOne = Math.floor(Math.random() * (60 - 45 + 1)) + 45;
    // const firstNameTime = firstName + timeOne;
    const second = document.querySelector('input[name=swimmerTwo]');
    const secondName = second.value;
    const timeTwo = Math.floor(Math.random() * (60 - 45 + 1)) + 45;
    // const secondNameTime = secondName + timeTwo;
    const third = document.querySelector('input[name=swimmerThree]');
    const thirdName = third.value;
    const timeThree = Math.floor(Math.random() * (60 - 45 + 1)) + 45;
    // const thirdNameTime = thirdName + timeThree;
    if (timeOne <= timeTwo && timeOne <= timeThree && timeTwo <= timeThree) {
        let message = document.querySelector('h2');
        message.innerHTML = firstName + ' takes <span style="color:gold;">gold</span> with ' + timeOne + ' seconds' + '<br>' + secondName + ' takes <span style="color:silver;">silver</span> with ' + timeTwo + ' seconds' + '<br>' + thirdName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeThree + ' seconds';
    } else if (timeOne <= timeTwo && timeOne <= timeThree && timeThree <= timeTwo) {
        let message = document.querySelector('h2');
        message.innerHTML = firstName + ' takes <span style="color:gold;">gold</span> with ' + timeOne + ' seconds' + '<br>' + thirdName + ' takes <span style="color:silver;">silver</span> with ' + timeThree + ' seconds' + '<br>' + secondName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeTwo + ' seconds';
    } else if (timeTwo <= timeOne && timeTwo <= timeThree && timeOne <= timeThree) {
        let message = document.querySelector('h2');
        message.innerHTML = secondName + ' takes <span style="color:gold;">gold</span> with ' + timeTwo + ' seconds' + '<br>' + firstName + ' takes <span style="color:silver;">silver</span> with ' + timeOne + ' seconds' + '<br>' + thirdName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeThree + ' seconds';
    } else if (timeTwo <= timeOne && timeTwo <= timeThree && timeThree <= timeOne) {
        let message = document.querySelector('h2');
        message.innerHTML = secondName + ' takes <span style="color:gold;">gold</span> with ' + timeTwo + ' seconds' + '<br>' + thirdName + ' takes <span style="color:silver;">silver</span> with ' + timeThree + ' seconds' + '<br>' + firstName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeOne + ' seconds';
    } else if (timeThree <= timeOne && timeThree <= timeTwo && timeOne <= timeTwo) {
        let message = document.querySelector('h2');
        message.innerHTML = thirdName + ' takes <span style="color:gold;">gold</span> with ' + timeThree + ' seconds' + '<br>' + firstName + ' takes <span style="color:silver;">silver</span> with ' + timeOne + ' seconds' + '<br>' + secondName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeTwo + ' seconds';
    } else {
        let message = document.querySelector('h2');
        message.innerHTML = thirdName + ' takes <span style="color:gold;">gold</span> with ' + timeThree + ' seconds' + '<br>' + secondName + ' takes <span style="color:silver;">silver</span> with ' + timeTwo + ' seconds' + '<br>' + firstName + ' takes <span style="color:#CD7F32;">bronze</span> with ' + timeOne + ' seconds';
    }
}
