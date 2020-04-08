function start() {
    soltar = document.getElementById('cajasoltar');
    soltar.addEventListener('dragenter', function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('dragover', function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('drop', soltado, false);
} //Fin funcion start

function soltado(e) {
    e.preventDefault();
    var archivos = e.dataTransfer.files;
    var lista = '';
    for (var f = 0; f < archivos.length; f++) {
        lista += 'Archivo: ' + archivos[f].name + ' ' + archivos[f].size + '<br>';
    } //Fin for
    soltar.innerHTML = lista;
} //Fin function soltado
window.addEventListener("load", start, false);