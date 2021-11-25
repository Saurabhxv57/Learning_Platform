var error = document.getElementById('error')
var login = document.getElementById('login')
var correct_email = "example@gmail.com"
var correct_password = "12345678"

login.addEventListener('click', () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (!email || !password) {
        error.innerText = "Please enter your email and password!"
        setTimeout(() => {
            error.innerText = ""
        }, 3000)
    } else {
        if (email != correct_email || password != correct_password) {
            error.innerText = "Invalid credentials! Try again."
            setTimeout(() => {
                error.innerText = ""
            }, 3000)
        } else {
            window.location.href = "index.html"
        }
    }
})