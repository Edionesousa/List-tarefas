
let contador = 0;

let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    // SE NAO FOR VAZIO,          NAO FOR NULO,              NAO FOR INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        // HTML QUE VAI SER INSERIDO
        ++contador;
        let novoItem = `        
        <div id ="${contador}" class="item">     
            <div class="item-icone">
                <i class="fa-regular fa-circle"></i>
            ${valorInput}
            </div>
            <div class="item-nome">
            </div>
            <div class="item-botao button">
                <button onclick="deletar(${contador})"id="deletar"><i class="fa-solid fa-trash"></i> Deletar</button>
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
    
    //DELETAR UMA ATIVIDADE DA MINHA LISTA

    function deletar(id){
        var tarefa =  document.getElementById(id);
        tarefa.remove();

    }
    input.addEventListener("keyup", function(event){
        // ADD USANDO TELCA ENTER (13)
        if(event.keyCode === 13){
            let key = event;
            event.preventDefault();
            addTarefa();
        }
    });
    


