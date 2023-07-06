var alerta = "Página carregada com sucesso!"

alert(alerta);

function soma() {

    var valor=document
        .getElementById("inputValor1")
        .value;

    var valor2=document
        .getElementById("inputValor2")
        .value;
    
    var soma=Number(valor) + Number(valor2);
    
    document
        .getElementById("resultado")
        .innerHTML= "a soma é: " + soma;
}

function divisao() {

    var valor=document
        .getElementById("inputValor3")
        .value;

    var valor2=document
        .getElementById("inputValor4")
        .value;
    
    var divisao=Number(valor)/Number(valor2);
    
    document
        .getElementById("resultadoD")
        .innerHTML= "o quociente é: " + divisao;
}

function multiplicacao() {

    var valor=document
        .getElementById("inputValor5")
        .value;

    var valor2=document
        .getElementById("inputValor6")
        .value;
    
    var multiplicacao=Number(valor)*Number(valor2);
    
    document
        .getElementById("resultadoM")
        .innerHTML= "o produto é: " + multiplicacao;
}

function comparacao(valor,valor2) {
    var valor=document
        .getElementById("inputValor7")
        .value;

    var valor2=document
        .getElementById("inputValor8")
        .value;
   
    if (valor2=valor) {
            return true
        } else {
            return false
        }   
        
    var resultadoC
        document
        .getElementById("resultadoC");{
            if (comparacao)true
            .innerHTML= "Os valores são iguais!"}
            {if (comparacao)false
            .innerHTML= "Os valores são diferentes!";
            }
    
}

