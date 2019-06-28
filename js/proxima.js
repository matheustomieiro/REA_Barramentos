var pagina = 1;
document.getElementById("numero_pagina").textContent = "Página " + pagina;

function trocaElemento() {
    var path = "resources/elemento" + pagina + ".png";
    document.getElementById("imagem").src = path;
    document.getElementById("numero_pagina").textContent = "Página " + pagina;
}

function avancarPagina() {
    if (pagina < 20) {
        pagina++;
    }
    trocaElemento();
}

function retrocederPagina() {
    if (pagina > 1) {
        pagina--;
    }
    trocaElemento();
}