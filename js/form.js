
const message = document.getElementById('form__message');

const pass = document.getElementById('pass').value;
const pass2 = document.getElementById('passx2').value;

function validarPass(){
    if(pass === pass2){
        return true;
    }else{
        message.innerHTML = "Introduca mismo contraseña";
        return false;
    }
}