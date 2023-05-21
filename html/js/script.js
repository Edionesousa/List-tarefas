let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let buttonDelet = document.getElementById("button");

function addTarefa(){
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    // SE NAO FOR VAZIO,          NAO FOR NULO,              NAO FOR INDEFINIDO
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
                <button onclick("delet")id="deletar"><i class="fa-solid fa-trash"></i> Deletar</button>
            </div>
        </div> 
`
        // ADICIONAR NOVO ITEM HTML MAIN NA TELA
        main.innerHTML += novoItem;
        // ZERAR OS CAMPO DO INPUT
        input.value = "";
        // MANTER O CAMPO INPUT FOCADO
        input.focus();

        };
    };


    input.addEventListener("keyup", function(event){
        // ADD USANDO TELCA ENTER (13)
        if(event.keyCode === 13){
            event.preventDefault();
            addTarefa();
        }
    });

