const equalPassword = () => {
    const password1 = document.querySelector('input[name="password-one"]');
    const inputPass = password1.value;
    const password2 = document.querySelector('input[name="password-two"]');
    const inputPass2 = password2.value;
    const lengthOfPassword = inputPass.length;
    if (inputPass === inputPass2 && lengthOfPassword >= 8) {
        const successMessage = document.querySelector('h3')
        successMessage.innerHTML = 'Your password is set';
    } else if (inputPass === inputPass2 && lengthOfPassword < 8) {
        const failureMessage = document.querySelector('h3');
        failureMessage.innerHTML = 'Your passwords is too short, it has to be minimum 8 characters.';
    } else {
        const thirdMessage = document.querySelector('h3')
        thirdMessage.innerHTML = 'Your password needs to match';
    }
}