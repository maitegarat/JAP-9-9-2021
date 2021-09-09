var librosArray;
var preguntaslibro =
    [

        {
            // preguntas: ["¿En qué fecha se publicó?", "¿En que departamento nació el autor?", "¿Cuál es el género del libro?"]
            id: 1,
            respuestascorrectas: [
                "1917", "Salto", "Cuento"
            ]
        },

        {
            id: 2,
            respuestascorrectas: [
                "1944", "Montevideo", "Novela"
            ]
        },

        {
            id: 3,
            respuestascorrectas: [
                "1939", "Montevideo", "Novela"
            ]
        },

        {
            id: 4,
            respuestascorrectas: [
                "1971", "¿Cuantos relatos contiene?", "Ensayo y reportaje"
            ]
        },

        {
            id: 5,
            respuestascorrectas: [
                "", "¿Cuantos relatos contiene?", "¿De qué estaba hecho el almohadón?"
            ]
        }


    ]

function mostrarLibro(libros) {
    let contenido = ""

    for (let libro of libros) {
        if (libro.id == localStorage.getItem("idLibro")) {
            contenido += 'Título: ' + libro.titulo + '<br>';
            contenido += 'Editorial: ' + libro.editorial + '<br>';
            contenido += 'Páginas: ' + libro.paginas + '<br>';
            contenido += 'Autor: ' + libro.autor + '<br>';
            contenido += '<img src="img/' + libro.titulo + '/1.jfif " alt=""> '
            contenido += '<img src="img/' + libro.titulo + '/2.jfif " alt=""> '
            contenido += '<img src="img/' + libro.titulo + '/3.jfif " alt=""> '
        }
        document.getElementById("infoLibro").innerHTML = contenido;
    }



}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIBROS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

            mostrarLibro(librosArray);
        }
    });
});