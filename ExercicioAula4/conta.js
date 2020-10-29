/*
Crie uma função banco que faça saque e depósitos e mostre o saldo.
*/

const SAQUE = 'sacar';
const DEP = 'depositar';

function banco(saqDep, dinheiro) {
    saldo = 1000
    switch (saqDep) {
        case SAQUE:
            saldo = sacar(saldo, dinheiro)
            break;
        case DEP:
            saldo = depositar(saldo, dinheiro)
            break;
    }
    return saldo
}

function sacar(saldo, dinheiro) {
    return (saldo - dinheiro);
}

function depositar(saldo, dinheiro) {
    return (saldo + dinheiro);
}

console.log(banco(SAQUE, 500))