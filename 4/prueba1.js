// soy un comentario de una linea
/* j------------------ */
//alert("prueba de codigo");
var mensaje = "hola mundi"
console.log(mensaje)
console.log(mensaje)
console.log(localStorage)
var esViernes = true;
console.log('Es viernes y queremos irnos:' + esViernes);
//debugger para abrir el depurador del codigo en esta linea
if (esViernes == true) {
        console.log('Pues si que es viernes, nos quedan 45 minutos');
}
//var nombreUsuario prompt('Introduzca su nombre')
function enviaFormulario() {
        console.log("Llamando a la función enviaFormulario");
        var div = document.getElementById("mensajes");
        //Las pass coinciden
        if (comprobarPass()) {
                //console.log('El nombre del usuario es:+ nombre);
                //document.writeln("<h1>" + nombre + "</h1>");
                //document.writeln("<h1>Password OK</h1>");
                var nombre = document.getElementById("nombre").value;
                div.innerHTML = nombre = " Password OK";
                div.style.backgroundColor = "green";
        } else {
                //document.writeln("<h1>Password not okay</h1>")
                var nombre = document.getElementById("nombre").value;
                div.innerHTML = nombre + "Password KO";
                div.style.backgroundColor = "red";
        }
}
function comprobarPass() {
        var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;
        return pass1 == pass2
}
function cambiaColor(color) {
        var div = document.getElementById("mensajes");
}
div.style.backgroundColor = color;