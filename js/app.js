var check = document.querySelector('.check');

check.addEventListener('click',idioma);


function idioma(){
    let id = check.checked;

    if(id){
        location.href="en/index.html";
    }else{
        location.href="../index.html";
    }
}