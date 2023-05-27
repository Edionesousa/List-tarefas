
let contador =0;
//PEGAR DADOS DO INPUT
let input = document.getElementById("inputTarefa");

//PARTE CORPO DO CODIGO
let main = document.getElementById("areaLista");

    //ADICIONAR DADOS DO INPUT
let btnAdd = document.getElementById("btn-add")
    btnAdd.addEventListener("click", addTarefa);


    //DELETAR HTML INGETADO
let deletar = document.getElementById("deletar")

    // FUNÇAO VAI ADICIONAR O HTML AO CORPO
function addTarefa(item){
    let valorInput = input.value; //PEGAR O VALOR DIGITADO NO INPUT

    //SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO.
    if((valorInput !=="")&&(valorInput !== null)&&(valorInput !== undefined)){
        let novoIten = 
    `<div class="item">
    <div class="item-icone">
        <i class="mdi mdi-circle-outline"></i>
    </div>
    <div class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button onclick="delete()"id="delete" class="delete">
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
input.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        btnAdd.click();
    }
})