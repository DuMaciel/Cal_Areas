// var button = document.createElement('button');
// button.setAttribute('type', 'button')
// button.appendChild(document.createTextNode('Seu button'));
// document.body.appendChild(button);

//pegando elementos
const buttons = [
    document.getElementById("button_0"),
    document.getElementById("button_1"),
    document.getElementById("button_2"),
    document.getElementById("button_3")
];

const formMapper = {
    "button_0": 0,
    "button_1": 0,
    "button_2": 1,
    "button_3": 2,
}

const forms = [
    document.getElementById("form_0"),
    document.getElementById("form_1"),
    document.getElementById("form_2"),
];

const inputs = [
    document.getElementById("altura"),
    document.getElementById("base"),
    document.getElementById("alturaTra"),
    document.getElementById("baseMe"),
    document.getElementById("baseMa"),
    document.getElementById("diagonalMe"),
    document.getElementById("diagonalMa"),
];

const unity = [
    document.getElementById("altura_s"),
    document.getElementById("base_s"),
    document.getElementById("alturaTra_s"),
    document.getElementById("baseMe_s"),
    document.getElementById("baseMa_s"),
    document.getElementById("diagonalMe_s"),
    document.getElementById("diagonalMa_s"),
    document.getElementById("resultado_s"),
];



// Escutando
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    element.addEventListener("click", function () { onClick(index) });
}


// Funções de remoção e inclusão de classes
function ativa(todos, i, classeAtiva) {
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];

        element.classList.remove(classeAtiva);
    }

    todos[i].classList.add(classeAtiva);
};

function desativa(todos, i, classeDesativa) {
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];

        element.classList.add(classeDesativa);
    }

    todos[i].classList.remove(classeDesativa);
};

const resultante = document.getElementById("form_R");

function onClick(id) {
    resultante.classList.remove("desativado");
    clicadoId = id
    const formId = formMapper[buttons[id].id]

    ativa(buttons, id, "clicado")
    desativa(forms, formId, "desativado")

    zerarInputs();
    document.getElementById("resultado").innerHTML = "Resultado:";
}


// Calcular Areas
const ButtonCal = document.getElementById("button_R");

ButtonCal.addEventListener("click", function () { resultado() });

function resultado() {
    let retorno;

    if (buttons[0].classList.contains("clicado")) {
        retorno = calTriangulo(parseFloat(inputs[0].value), unity[0].value, parseFloat(inputs[1].value), unity[1].value, unity[7].value);

    } else if (buttons[1].classList.contains("clicado")) {
        retorno = calRetangulo(parseFloat(inputs[0].value), unity[0].value, parseFloat(inputs[1].value), unity[1].value, unity[7].value);

    } else if (buttons[2].classList.contains("clicado")) {
        retorno = calTrapezio(parseFloat(inputs[2].value), unity[2].value, parseFloat(inputs[3].value), unity[3].value, parseFloat(inputs[4].value), unity[4].value, unity[7].value);

    } else if (buttons[3].classList.contains("clicado")) {
        retorno = calLosango(parseFloat(inputs[5].value), unity[5].value, parseFloat(inputs[6].value), unity[6].value, unity[7].value);
    };

    document.getElementById("resultado").innerHTML = "Resultado: " + retorno;
}

function zerarInputs() {
    let i;
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function calTriangulo(altura, alturaUni, base, baseUni, resultUni) {
    altura = convertPadrao(altura, alturaUni);
    base = convertPadrao(base, baseUni);

    let area = altura * base / 2;
    area = convertResult(area, resultUni);
    return area;
}

function calRetangulo(altura, alturaUni, base, baseUni, resultUni) {
    altura = convertPadrao(altura, alturaUni);
    base = convertPadrao(base, baseUni);

    let area = altura * base;
    area = convertResult(area, resultUni);
    return area;
}

function calTrapezio(altura, alturaUni, baseMe, baseMeUni, baseMa, baseMaUni, resultUni) {
    altura = convertPadrao(altura, alturaUni);
    baseMe = convertPadrao(baseMe, baseMeUni);
    baseMa = convertPadrao(baseMa, baseMaUni);

    let area = (baseMe + baseMa) * altura / 2;
    area = convertResult(area, resultUni);
    return area;
}

function calLosango(diagonalMe, diagonalMeUni, diagonalMa, diagonalMaUni, resultUni) {
    diagonalMe = convertPadrao(diagonalMe, diagonalMeUni);
    diagonalMa = convertPadrao(diagonalMa, diagonalMaUni);

    let area = diagonalMe * diagonalMa / 2;
    area = convertResult(area, resultUni);
    return area;
}

function convertPadrao(valor, unidade) {
    if (unidade == 'mm') {
        valor = valor / 1000;
        return valor;
    } else if (unidade == 'cm') {
        valor = valor / 100;
        return valor;
    } else if (unidade == 'm') {
        return valor;
    } else if (unidade == 'km') {
        valor = valor * 1000;
        return valor;
    }
}

function convertResult(valor, unidade) {
    if (unidade == 'mm²') {
        valor = valor * 1000000;
        return valor;
    } else if (unidade == 'cm²') {
        valor = valor * 10000;
        return valor;
    } else if (unidade == 'm²') {
        return valor;
    } else if (unidade == 'km²') {
        valor = valor / 1000000;
        return valor;
    }
}

