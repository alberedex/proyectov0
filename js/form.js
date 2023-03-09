
const message = document.getElementById('form__message');

const formulario = document.querySelector('form');
if (message != undefined) {
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
        progress.style.width = ((success * 100) / cantidadForm) + "%";

        progress.innerText = Math.trunc(((success * 100) / cantidadForm)) + "%";        
    });    
});

form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false)


// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })();