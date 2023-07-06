var alerta = "Página carregada com sucesso!"

alert(alerta);



function soma() {
    var valor = document
        .getElementById("inputValor1")
        .value;
    var valor2 = document
        .getElementById("inputValor2")
        .value;

    var soma = valor + valor2;
    document
        .getElementById("resultado")
        .textContent = "A soma é: " + soma;
}

