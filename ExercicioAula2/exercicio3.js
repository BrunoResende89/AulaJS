/*
Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
com a tabela abaixo.
*/

let Salario = 4500;
let NovoSalario;

if( Salario <= 1045) {
    console.log("O novo salário é U$$" + (NovoSalario = Salario * 1.30))
} else if( Salario <= 1500) {
    console.log("O novo salário é U$$" + (NovoSalario = Salario * 1.25))
} else if( Salario <= 2600) {
    console.log("O novo salário é U$$" + (NovoSalario = Salario * 1.20))
} else if( Salario <= 3550) {
    console.log("O novo salário é U$$" + (NovoSalario = Salario * 1.15))
} else ( Salario > 3550)
    console.log("O novo salário é U$$" + (NovoSalario = Salario * 1.10))
