
peliculas = document.getElementById("mainPeliculas");
principal = document.getElementById("main");
if(peliculas != undefined){
    peliculas.style.display = "none";
}


linkPeliculas = document.getElementById("link__peliculas");

function visibilidad(elem){
    contenedor = document.getElementById(elem);

    principal.style.display = "none";
    peliculas.style.display = "none";

    
    contenedor.style.display = "block";
}


// Nueva funcionalidad
function mostrarContrasena() {
	var campo = document.getElementById("pass");
	if (campo.type == "password") {
		campo.type = "text";
	} else {
		campo.type = "password";
	}
}