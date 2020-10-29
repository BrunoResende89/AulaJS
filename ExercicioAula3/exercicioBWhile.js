/*
b. Exibir os trinta primeiros valores da série de Fibonacci. A série: 1, 1, 2, 3, 5, 8.
*/

let i = 0;
let arrayF = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '233', '377', '610', '987', '1597', '2584', '4181', '6765', '10946', '17711', '28657', '46368', '75025', '121393', '196418', '317811', '514229', '832040'];
while (i <= 30) {
    let text = "Os 30 primeiros valores da série Fibonacci é: " + arrayF[i];
    console.log(text);
    i++;
}