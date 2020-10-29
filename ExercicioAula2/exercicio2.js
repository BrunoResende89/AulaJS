/*
Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto.
*/

let ValorVenda;
let Produto = 44;

if(Produto < 50) {
    ValorVenda = Produto * 1.45
} else {
    ValorVenda = Produto * 1.30
}
    console.log("O Valor da Venda é " + ValorVenda)

