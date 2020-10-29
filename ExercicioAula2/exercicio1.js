/*
Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
ou Reprovado por Média. A média para aprovação é 70 e o limite de faltas é 25% do
total de aulas. O número de aulas ministradas no semestre foi de 80. A reprovação por
falta sobrepõe a reprovação por Média.
*/

const MEDIA = 70;
const AULAS = 80;
const LIMITE_FALTAS = 25;

let nome = "Zezinho";
let nota1 = 60;
let nota2 = 75;
let nota3 = 90;
let numFaltas = 20;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log("soma das notas" + somaNotaAluno);

let mediaAluno = SomaNotaAluno / 3 ;
console.log(" media das notas " + mediaAluno);

let madiaFinal = mediaAluno.toFixed();
console.log("media final" + mediaFinal);

// 1 parte da solução da media
if(mediaFinal >= MEDIA) {
    console;log("O aluno" + nome + "está aprovado");
} else {
    console.log("O aluno" + nome + "está reprovado");
}

// calculo da porcentagem (x/y)*1000
let porcentagemFaltas = (numFaltas/AULAS)*100
    console;log("a porcentagem de faltas " + porcentagemFaltas)

if(mediaFinal >= MEDIA && porcentagemFaltas < LIMITE_FALTAS) {
    console;log("O aluno "+ nome + "está aprovado");
} else if (mediaFinal >= MEDIA && porcentagem > LIMITE_FALTAS) {
    console.log("O aluno" + nome + "está reprovado por falta");
} else {
    console.log("O aluno" + nome + " está reprovado por Média");
}



