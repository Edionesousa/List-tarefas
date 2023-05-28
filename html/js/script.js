
let contador = 0;
//PEGAR DADOS DO INPUT
let input = document.getElementById("inputTarefa");
//PARTE CORPO DO CODIGO
let main = document.getElementById("areaLista");
    //ADICIONAR DADOS DO INPUT
let btnAdd = document.getElementById("btn-add")
    btnAdd.addEventListener("click", addTarefa);
    // FUNÇAO VAI ADICIONAR O HTML AO CORPO

    function addTarefa(){
        let valorInput = input.value; //PEGAR O VALOR DIGITADO NO INPUT
        //SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO.
    if((valorInput !=="")&&(valorInput !== null)&&(valorInput !== undefined)){
        ++contador;
        let novoIten = `<div id="${contador}"class="item">
        <div onclick ="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick ="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
        </div>
    <div class="item-botao">
        <button onclick="deletar(${contador})"class="delete" id="delete">
            Deletar <i class="mdi mdi-delete"></i>
        </button>
    </div>`;
    //ADICIONAR NOVO ITEM DO MAIN
    main.innerHTML += novoIten;
    //ZERAR OS CAPOS
    input.value = "";
    input.focus();
    
    }
}
    function marcarTarefa(id){
    const item =  document.getElementById(id);
        var classe = item.getAttribute('class');
    console.log(classe);
        if(classe == "item"){
    item.classList.add("clicado");
    var icone = document.getElementById('icone_' + id);
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle')
    item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
    var icone = document.getElementById('icone_' + id);
    icone.classList.add('mdi-circle-outline')
    }
}
input.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        btnAdd.click();
    }
})
function deletar(id){
    const tarefa = document.getElementById(id);
    tarefa.remove();
}
