
const message = document.getElementById('form__message');

const formulario = document.querySelector('form');

message.style.display = "none"

formulario.addEventListener("submit",
    function (event) {
        let pass = document.getElementById('pass').value;
        let pass2 = document.getElementById('passx2').value;

        if (pass !== pass2) {
            message.style.display = "block"
            message.innerHTML = "Introduca mismo contraseña";
            event.preventDefault();
        }
    });