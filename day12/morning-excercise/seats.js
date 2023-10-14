const rowColumn = (number) => {
    let row = number % 10;
    let makeString = number;
    let nowItIsString = makeString.toString();
    let prepended = nowItIsString.padStart(2, '0');
    const columnNumber = String(prepended)[0];
    const numberColumnNumber = Number(columnNumber);
    if (number < 10) {
        let result = 'A'
        return result + row
    } else if (number < 20) {
        let result = 'B'
        return result + row
    } else if (number < 30) {
        let result = 'C'
        return result + row
    } else if (number < 40) {
        let result = 'D'
        return result + row
    } else if (number < 50) {
        let result = 'E'
        return result + row
    } else {
        let result = 'F'
        return result + row
    }
}

console.log(rowColumn(3));






