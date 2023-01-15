
const message = document.getElementById('form__message');

const formulario = document.querySelector('form');
if(message != undefined){
    message.style.display = "none"
}

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


// Nueva funcionalidad
function mostrarContrasena() {
	var campo = document.getElementById("pass");
	if (campo.type == "password") {
		campo.type = "text";
	} else {
		campo.type = "password";
	}
}