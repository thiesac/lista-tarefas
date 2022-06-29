let listaTarefas = [];

function adicionar() {
    let nomeTarefa = document.getElementById("tarefa").value;
    
    if (nomeTarefa == "") {
        alert("Preencha o campo com uma tarefa")
    } else {
        listaTarefas.push(nomeTarefa);
    }
    imprimir()
    esvaziarCampo()
}

function imprimir() {
    let sectionTarefa = document.getElementById("tarefa-adicionada");
    let cacheSection = "";
    sectionTarefa.innerHTML = "";
    
    for (let i = 0; i< listaTarefas.length; i++) {
        cacheSection = cacheSection + `<div>${listaTarefas[i]}</div>`;
    }
    sectionTarefa.innerHTML = cacheSection;
}

let listaBkp;

function buscar() {
    let busca = document.getElementById("tarefa").value;
    listaBkp = listaTarefas;
    listaTarefas = listaTarefas.filter((elemento) => {
        return elemento.toLowerCase().includes(busca.toLowerCase())
    })
    imprimir()
    esvaziarCampo()
}

function esvaziarCampo() {
    document.getElementById("tarefa").value = "";
}

function limpar() {
    listaTarefas = listaBkp;
    document.getElementById("tarefa").innerHTML = "";
    imprimir()
}