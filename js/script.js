import peliculas from './peliculas.js'

//Los generos serán Acción (28), thriller(53), Aventura(12).

var containerAcc28 = document.getElementById("genero-28")
var containerThrll53 = document.getElementById("genero-53")
var containerAdvtr12 = document.getElementById("genero-12")

document.body.addEventListener('load', loadFilms())

function loadFilms(){
    debugger
    for(var pelicula of peliculas){
        var peliculaHTML = "<div class='pelicula'><img class='img-pelicula' src='https://image.tmdb.org/t/p/w500" + pelicula.poster_path + "' alt='img/Pelicula'><h3>" + pelicula.original_title + "</h3></div>"
        //Peliculas de Accion
        if(pelicula.genre_ids.includes(28)){
            containerAcc28.innerHTML += peliculaHTML
        }
        //Peliculas de Thriller
        if(pelicula.genre_ids.includes(53)){
            containerThrll53.innerHTML += peliculaHTML
        }
        
        //Peliculas de Aventura
        if(pelicula.genre_ids.includes(12)){
            containerAdvtr12.innerHTML += peliculaHTML
        }
    }
}
