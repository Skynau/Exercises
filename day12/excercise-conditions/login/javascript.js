
// This is ust for getting it printed
const getPassword = () => {
    const askName = document.querySelector('input[name="first_name"]')
    const name = askName.value;
    console.log(name);
    const askPassword = document.querySelector('input[name="password"]')
    const password = askPassword.value;
    console.log(password);
    if (password === 'sore-thumb-218') {
        const header3 = document.querySelector('h3');
        header3.innerHTML = 'access granted';
    } else {
        const headerDenied = document.querySelector('h3');
        headerDenied.innerHTML = 'Nice try.';
    }
}   