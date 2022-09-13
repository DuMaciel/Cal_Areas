const buttons = [
    document.getElementById("button_0"),
    document.getElementById("button_1"),
    document.getElementById("button_2"),
    document.getElementById("button_3")
]

const forms = [
    document.getElementById("form_0"),
    document.getElementById("form_1"),
    document.getElementById("form_2"),
]

const formMapper = {
    "button_0": 0,
    "button_1": 0,
    "button_2": 1,
    "button_3": 2,
}

const resultante = document.getElementById("form_R");

var clicadoId = undefined
var formAnterior = undefined;

function ativa(todos, i, classeAtiva) {
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];

        element.classList.remove(classeAtiva);
    }

    todos[i].classList.add(classeAtiva);
}

function desativa(todos, i, classeDesativa) {
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];

        element.classList.add(classeDesativa);
    }

    todos[i].classList.remove(classeDesativa)
}

function onClick(id) {
    resultante.classList.remove("desativado");
    clicadoId = id
    const formId = formMapper[buttons[id].id]

    ativa(buttons, id, "clicado")
    desativa(forms, formId, "desativado")
}

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    element.addEventListener("click", function () { onClick(index) })
}

for (let index = 0; index < forms.length; index++) {
    const element = forms[index];

    element.classList.add("desativado")

}


// Calcular Areas
const inputs = [
    document.getElementById("altura"),
    document.getElementById("base"),
    document.getElementById("baseMe"),
    document.getElementById("baseMa"),
    document.getElementById("diagonalMe"),
    document.getElementById("diagonalMa"),
];

const calcular = document.getElementById("button_R");

calcular.addEventListener("click", function () { resultado() });

function resultado() {
    let retorno = calTriangulo(parseFloat(inputs[0].value), parseFloat(inputs[1].value));
    document.getElementById("resultado").innerHTML = "Resultado:" + retorno;
}


function calTriangulo(altura, base) {
    const area = altura * base / 2;
    return area;
}

function calRetangulo(altura, base) {
    const area = altura * base;
    return area;
}

function calTrapezio(altura, baseMe, baseMa) {
    const area = (baseMe + baseMa) * altura / 2;
    return area;
}

function calLosango(diagonalMe, diagonalMa) {
    const area = (baseMe + baseMa) * altura / 2;
    return area;
}