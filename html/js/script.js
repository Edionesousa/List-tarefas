let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;
    // se nao for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        // HTML QUE VAI SER INSERIDO
        let novoItem = `        
        <div class="item">     
            <div class="item-icone">
                <i class="fa-regular fa-circle"></i>
            ${valorInput}
            </div>
            <div class="item-nome">
            </div>
            <div class="item-botao button">
                <button id="ptn-add"><i class="fa-solid fa-trash"></i> Deletar</button>
            </div>
        </div> 
`
        // ADICIONAR NOVO ITEM MAIN
        main.innerHTML += novoItem;
        // ZERAR OS CAMPO di unput
        input.value = "";
        //MANTER O CAMPO INPUT FOCADO
        input.focus();

        };
    };

