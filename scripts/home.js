const trianguloButton = document.getElementById("1");
const retanguloButton = document.getElementById("2");
const losangoButton = document.getElementById("3");
const trapezioButton = document.getElementById("4");

var clicadoId = undefined;

function onClickTriangulo() {
    clicadoId = 1;
    trianguloButton.classList.add("clicado");
    retanguloButton.classList.remove("clicado");
    losangoButton.classList.remove("clicado");
    trapezioButton.classList.remove("clicado");
}

function onClickRetangulo() {
    clicadoId = 2;
    trianguloButton.classList.remove("clicado");
    retanguloButton.classList.add("clicado");
    losangoButton.classList.remove("clicado");
    trapezioButton.classList.remove("clicado");
}
function onClickLosango() {
    clicadoId = 3;
    trianguloButton.classList.remove("clicado");
    retanguloButton.classList.remove("clicado");
    losangoButton.classList.add("clicado");
    trapezioButton.classList.remove("clicado");
}
function onClickTrapezio() {
    clicadoId = 4;
    trianguloButton.classList.remove("clicado");
    retanguloButton.classList.remove("clicado");
    losangoButton.classList.remove("clicado");
    trapezioButton.classList.add("clicado");
}

trianguloButton.addEventListener("click", onClickTriangulo)
retanguloButton.addEventListener("click", onClickRetangulo)
losangoButton.addEventListener("click", onClickLosango)
trapezioButton.addEventListener("click", onClickTrapezio)
