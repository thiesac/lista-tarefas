let listaTarefas = [];

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
        cacheSection = cacheSection + `<tr><td>${listaTarefas[i]}</td></tr>`;
    }
    sectionTarefa.innerHTML = cacheSection;
}

function buscar() {
    let busca = document.getElementById("tarefa").value;
    listaBkp = buscaLista;
    buscaLista = listaTarefas.filter((elemento) => {
        return elemento.toLowerCase().includes(busca.toLowerCase())
    })
    document.getElementById("tarefa-adicionada").innerHTML = "";
    imprimir()
}

function limpar() {
    document.getElementById("tarefa").value = "";
}