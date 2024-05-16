function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtde = parseInt(document.getElementById('qtd').value);

    if(qtde <= 0){
        alert('Digite uma quantidade maior que 0.');
    }else{
        if(tipo == 'inferior'){
            comprarInferior(qtde);
            limparQtde();
        }else{
            if(tipo == 'superior'){
                comprarSuperior(qtde);
                limparQtde();
            }else{
                comprarPista(qtde);
                limparQtde();
            }
        }
    }
}

function limparQtde(){
    document.getElementById('qtd').value = '';
}

function qtdeIndisponivel(){
    alert('Quantidade indisponivel para o tipo de ingresso escolhido.');
}

function compraRealizadaComSucesso(){
    alert('Compra realizada com sucesso');    
}

function comprarInferior(qtde){
    qtdeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtde > qtdeInferior){
        qtdeIndisponivel();
    }else{
        qtdeInferior = qtdeInferior - qtde;
        document.getElementById('qtd-inferior').textContent = qtdeInferior;
        compraRealizadaComSucesso();
    }
}

function comprarSuperior(qtde){
    qtdeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtde > qtdeSuperior){
        qtdeIndisponivel();
    }else{
        qtdeSuperior = qtdeSuperior - qtde;
        document.getElementById('qtd-superior').textContent = qtdeSuperior;
        compraRealizadaComSucesso();
    }
}

function comprarPista(qtde){
    qtdePista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtde > qtdePista){
        qtdeIndisponivel();
    }else{
        qtdePista= qtdePista - qtde;
        document.getElementById('qtd-pista').textContent = qtdePista;
        compraRealizadaComSucesso();
    }
}