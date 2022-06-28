let listaTarefas = [];
let listaBkp;

function adicionar() {
    let nomeTarefa = document.getElementById("tarefa").value;
    
    if (nomeTarefa == "") {
        alert("Preencha o campo com uma tarefa")
    } else {
        listaTarefas.push(nomeTarefa);
    }
    imprimir()
    limpar()
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

//não funciona
function buscar() {
    let busca = document.getElementById("tarefa").value;
    listaBkp = buscaLista;
    buscaLista = listaTarefas.filter((elemento) => {
        return elemento.includes(busca)
    })
    imprimir()
    limpar()
}

function limpar() {
    document.getElementById("tarefa").value = "";
}