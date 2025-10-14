/*Exercício 1 – Multiplicação com Situação Problema
Enunciado:
Joana comprou 4 cadernos. Cada caderno custou R$ 12,00.
Pergunta:
Quanto ela gastou no total? */

let cadernos = 4
let custo = 12.56
let resultado = cadernos + custo
//console.log('Resposta: Joana gastou R$: ' + resultado + ' em cadernos')


/*1.	Calculadora de IMC
Crie um algoritmo que receba o peso e a altura de uma pessoa e 
calcule o Índice de Massa Corporal (IMC).
Formula IMC = Peso (kg) / Altura² (m) 
*/

let peso = 87
let altura = 1.71
let resultado1 = peso / (altura * altura) 
console.log('O IMC encontrado foi: ' + resultado1.toFixed(1))