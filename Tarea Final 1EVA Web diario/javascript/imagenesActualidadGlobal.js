let boton = document.getElementById("boton");
boton.addEventListener("click", mostrarNoticias);


let arrayNoticias = [
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/robot.webp",
        texto : "Conoce a ARCHAX, el robot humanoide con brazos funcionales creado en Japón",
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/toyota.jpg",
        texto : "Toyota suspende temporalmente sus operaciones en Japón"
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/alemania.jpg",
        texto : "Alemania estudia limitar las cargas de los vehículos eléctricos"
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/biden-xi.webp",
        texto : "Biden y Xi se reunirán la próxima semana, ¿qué se espera de este encuentro?" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/suiza.webp",
        texto : "Suiza lucha contra devastadores incendios forestales" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/terremotoUSA.webp",
        texto : "Fuerte terremoto sacude Texas" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/italia.webp",
        texto : "Italia construirá en Albania centros para inmigrantes rescatados en el mar" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/francia.jpg",
        texto : "Macron traslada al presidente de Israel el apoyo de Francia" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/holanda.webp",
        texto : "Mark Rutte consigue la reelección para un cuarto mandato en Países Bajos" 
    },
    {
        url : "./imágenes/imgs imagenesActualidadGlobal/grecia.webp",
        texto : "Las lluvias torrenciales e inundaciones en Grecia y Turquía" 
    }
];

let indice = 0;

function mostrarNoticias() {


    let imagen = document.getElementById("imagen");
    let texto = document.getElementById("texto");

    // while(indice>0 && indice <=3){
    //     indice++;
    // }
    
    imagen.src = arrayNoticias[indice].url;
    texto.innerText = arrayNoticias[indice].texto;
    
    indice = (indice + 1) % arrayNoticias.length;
}

