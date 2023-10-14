const tellMonth = Number(prompt('Tell me a month with its number (out of 12)'));

switch (tellMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        const answer = document.querySelector('h3')
        answer.innerHTML = '31 days';
        break;
    case 2:
        const answer2 = document.querySelector('h3')
        answer2.innerHTML = '28 days';
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        const answer3 = document.querySelector('h3')
        answer3.innerHTML = '30 days';
}