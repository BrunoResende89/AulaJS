// escopo global
let name = "Bruno";

// criação da assinatura e lista de argumentos
//(parametros) no caso 1 parâmetro chamado nome
function meuNome () {
    // escopo local
    nome = 'Pedro';
    return nome;
}

console.log(meuNome());

console.log(name);