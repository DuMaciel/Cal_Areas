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

    zerarInputs();
    document.getElementById("resultado").innerHTML = "Resultado:";
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
    document.getElementById("alturaTra"),
    document.getElementById("baseMe"),
    document.getElementById("baseMa"),
    document.getElementById("diagonalMe"),
    document.getElementById("diagonalMa"),
];

function zerarInputs() {
    let i;
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

const calcular = document.getElementById("button_R");

calcular.addEventListener("click", function () { resultado() });

function resultado() {
    let retorno = "não calculou";
    if (buttons[0].classList.contains("clicado")) {
        retorno = calTriangulo(parseFloat(inputs[0].value), parseFloat(inputs[1].value));
    } else if (buttons[1].classList.contains("clicado")) {
        retorno = calRetangulo(parseFloat(inputs[0].value), parseFloat(inputs[1].value));
    } else if (buttons[2].classList.contains("clicado")) {
        retorno = calTrapezio(parseFloat(inputs[2].value), parseFloat(inputs[3].value), parseFloat(inputs[4].value));
    } else if (buttons[3].classList.contains("clicado")) {
        retorno = calLosango(parseFloat(inputs[5].value), parseFloat(inputs[6].value));
    }

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
    const area = diagonalMe * diagonalMa / 2;
    return area;
}