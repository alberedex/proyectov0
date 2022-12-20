
peliculas = document.getElementById("mainPeliculas");
principal = document.getElementById("main");
peliculas.style.display = "none";


linkPeliculas = document.getElementById("link__peliculas");

function visibilidad(elem){
    contenedor = document.getElementById(elem);

    principal.style.display = "none";
    peliculas.style.display = "none";

    
    contenedor.style.display = "block";
}
