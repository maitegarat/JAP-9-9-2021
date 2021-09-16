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
                "2003", "Montevideo", "Novela"
            ]
        },

        {
            id: 5,
            respuestascorrectas: [
                "1971", "Montevideo", "Ensayo y reportaje"
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

    for (let respuestas of preguntaslibro) {
        if (respuestas.id == localStorage.getItem("idLibro")) {

            document.getElementById("p1op2").value = 1
            document.getElementById("lbp1").innerHTML = respuestas.respuestascorrectas[0]

            document.getElementById("p2op3").value = 1
            document.getElementById("lbp2").innerHTML = respuestas.respuestascorrectas[1]

            document.getElementById("p3op1").value = 1
            document.getElementById("lbp3").innerHTML = respuestas.respuestascorrectas[2]
        }
    }

}


function contador() {

    let cantTest;
    if (localStorage.getItem("cantTest")) {
        cantTest = localStorage.getItem("cantTest");
        cantTest++;
        localStorage.setItem("cantTest", cantTest);
    } else {
        localStorage.setItem("cantTest", 1);
    }
}

function contadorRespuestas(){

    let respuestas1 = document.getElementsByName("preg1");
    let respuestas2 = document.getElementsByName("preg2");
    let respuestas3 = document.getElementsByName("preg3");
     
    let puntaje = 0;
    let puntajetotal;

    for (let respuesta of respuestas1) {
        if (respuesta.checked) {
            puntaje += parseInt(respuesta.value)
            
        } 
    }
    
    for (let respuesta of respuestas2) {
        if (respuesta.checked) {
            puntaje += parseInt(respuesta.value)
        } 
    }
   
    for (let respuesta of respuestas3) {
        if (respuesta.checked) {
            puntaje += parseInt(respuesta.value)
        } 
    }

    if (localStorage.getItem("puntuacion")) {
        puntajetotal = parseInt(localStorage.getItem("puntuacion"));
        puntajetotal += puntaje
        localStorage.setItem("puntuacion", puntajetotal);
    } else {
        localStorage.setItem("puntuacion", puntaje);
    }
}

function promedio() {
        
    let prom = parseInt(localStorage.getItem("puntuacion"))/parseInt(localStorage.getItem("cantTest"))
   
    document.getElementById("seccprom").innerHTML = prom;

}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIBROS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

            mostrarLibro(librosArray);
            promedio()
        }
    });
   
    document.getElementById("formulario").addEventListener("submit", function () {
        contador();
        contadorRespuestas();
        window.location.href = "id.html"
     });

});


