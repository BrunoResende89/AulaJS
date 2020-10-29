/*
Crie uma função que receba um número e retorne a tabuada desse número.
*/

function tabuada(numero) {
    let resultado = 0

    for (multiplicador = 0; multiplicador <= 10; multiplicador++) {
        resultado = numero * multiplicador
        console.log(numero + ' x ' + multiplicador + ' = ' + resultado);

    }

    return resultado

}   console.log(tabuada(6))