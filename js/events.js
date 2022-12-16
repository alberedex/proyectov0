
// const test = document.getElementsByClassName("section__article");


// test.addEventListener("mouseenter", (event) => {

//     // event.target.style.border = "20px solid purple";

// }, false);

// test.addEventListener("mouseover", (event) => {

//     // event.target.style.border = "1px solid orange";

// }, false);


peliculas = document.getElementById("mainPeliculas");
principal = document.getElementById("main");
peliculas.style.display = "none";


linkPeliculas = document.getElementById("link__peliculas");

function visibilidad(elem){
    contenedor = document.getElementById(elem);
    // linkPeliculas.style.fontWeight = "bold";
    // linkPeliculas.style.font = "bold";

    principal.style.display = "none";
    peliculas.style.display = "none";

    // if()
    
    contenedor.style.display = "block";
}
