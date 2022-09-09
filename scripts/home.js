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