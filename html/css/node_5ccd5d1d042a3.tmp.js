@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;1,400;1,700&display=swap');

*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #e9e1e1;
}
h1{
    text-align: center;
    font-size: 3rem;
}
/**/
header{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width:90%;
    margin: auto auto;
}

input{
    height: 120px;
    font-size: 2rem;
    width: 70%;
    padding-left: 10%;

}

/*                        inicio  & corpo                */
button{
    width: 19%;
    cursor: pointer;
    background-color: green;
    color: white;
    font-weight: bold;
    border: none;
    height: 124px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

}

main{
    display: flex;
    flex-flow: row wrap;
    width: 89%;
    margin: auto auto;
    padding-top: 40px;
    margin: auto auto;


}
/*                       item lista modelo                          */
.item{
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 80px;
    width: 100%;
    box-shadow: 0 0 20px #ccc;
    font-weight: bold;
    margin-bottom:2% ;
}

.item-icone{
    font-size: 20px;
    margin: 0px 10px 0px 10px;
    color: green;
    cursor: pointer;

}
.item-nome{
    flex: auto;
    text-align: left;
    font-size: 20px;
    cursor: pointer;


}
.item-botao button{
    display: flex;
    background-color:transparent;
    color: rgb(220, 68, 68);
    margin:20px;
    border: none;
    flex:auto;
    font-size: 15px;
    height: auto;
    cursor: pointer;
}

/*  TAREFA SEM FAZER               */

.fa-circle-check{  
    background-color:transparent;
    color: green;
    margin: 0px 10px 0px 10px;
    border: none;
    flex:auto;
    font-size: 20px;
    height: auto;
    cursor: pointer;
    
}

//
.fa-cicle-clicado{
    background-color: rgb(139, 193, 193);
    border: none;
    background-color:transparent;
    color: redS;
    margin: 0px 10px 0px 10px;
    border: none;
    flex:auto;
    font-size: 20px;
    height: auto;
    cursor: pointer;
};

