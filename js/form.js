
const message = document.getElementById('form__message');

const formulario = document.querySelector('form');
if (message != undefined) {
    message.style.display = "none"
}

message.style.display = "none";

formulario.addEventListener("submit",
    function (event) {
        let pass = document.getElementById('pass').value;
        let pass2 = document.getElementById('passx2').value;

        if (pass !== pass2) {
            message.style.display = "block";
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


let inputs = document.getElementsByTagName('input');

for (const input of inputs) {
    input.addEventListener('keydown', function (event) {
        if (event.target.value.length >= 0) {
            event.target.classList.add("form__input_insert");
        }
    });
}

let success = 0;

let progress = document.getElementById('prog-bar');
let form = document.forms.form;
let cantidadForm = (form.length - 1);

Array.from(inputs).forEach(element => {
    element.addEventListener('change', function (params) {
        success = 0;
        Array.from(form).forEach(elementForm => {
            if (elementForm.checkValidity()) {
                success += 1;
            }
        });
        //introducimos en porcentaje de inputs correctos
        let num = ((success * 100) / cantidadForm);

        if(num <= 10){
            num = 0;
        }else if(num > 100){
            num = 100;
        }
        progress.style.width = num + "%";

        progress.innerText = Math.trunc(num) + "%";
    });
});

form.addEventListener('submit', event => {
   
    let isValid = true;
    let elementFocus = null;

    if (!this.user.checkValidity()) {
        isValid = false;
        elementFocus = user;
        console.log(user);
        console.log(this.user);
    }
    if (!this.Nombre.checkValidity()) {
        isValid = false;
    }
    if (!this.Apellidos.checkValidity()) {
        isValid = false;
    }
    if (!this.DNI.checkValidity()) {
        isValid = false;
    }
    if (!this.email.checkValidity()) {
        isValid = false;
    }
    if (!this.date.checkValidity()) {
        isValid = false;
    }
    if (!this.localidad.checkValidity()) {
        isValid = false;
    }
    if (!this.cardNum.checkValidity()) {
        isValid = false;
    }
    if (!this.pass.checkValidity()) {
        isValid = false;
    }
    if (!this.passx2.checkValidity()) {
        isValid = false;
    }
    if (!this.chk__terminos.checkValidity()) {
        isValid = false;
    }

    //  if (!form.checkValidity()) {
    // }
    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
        elementFocus.focus();
    }

    form.classList.add('was-validated');
}, false)