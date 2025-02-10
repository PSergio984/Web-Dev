const password = document.querySelector('#pass');
const cpassword = document.querySelector('#cPass');

password.addEventListener('input', () => {
    checkPasswords();
})

cpassword.addEventListener('input', () => {
    checkPasswords();
})

function checkPasswords() {
    let password1 = password.value;
    let password2 = cpassword.value;
    
     if (password1 != password2) {
        password.style.border = '1px solid red';
        password.previousElementSibling.style.color = 'red'
        cpassword.style.border = '1px solid red';
        cpassword.previousElementSibling.style.color = 'red'
    } else {
        password.style.border = '1px solid green';
        password.previousElementSibling.style.color = 'green'
        cpassword.style.border = '1px solid green';
        cpassword.previousElementSibling.style.color = 'green'
    }
}