/*1. Multiplicação com Situação Problema
Enunciado:
Joana comprou 4 cadernos. Cada caderno custou R$ 12,00.
Pergunta:
Quanto ela gastou no total? */

let cadernos = 4
let custo = 12.56
let resultado = cadernos + custo
//console.log('Resposta: Joana gastou R$: ' + resultado + ' em cadernos')

/*2. Calculadora de IMC
Crie um algoritmo que receba o peso e a altura de uma pessoa e 
calcule o Índice de Massa Corporal (IMC).
Formula IMC = Peso (kg) / Altura² (m)*/

let peso = 87
let altura = 1.71
let resultado1 = peso / (altura * altura) 
//console.log('O IMC encontrado foi: ' + resultado1.toFixed(1))

/*3. Conversor de Temperatura
Crie um algoritmo que converta uma temperatura em graus Celsius para Fahrenheit. */

let c = 30
let f = 32
let x = 1.8
let resultado2 = (( c * x) + f)
//console.log('A temperatura para ' + c + '°C' + ' em °F é ' + resultado2)

/*4. Problema de Adição e Subtração:
João tem 50 reais. Ele compra um brinquedo que custa 30 reais e depois compra 
um lanche que custa 10 reais. Quantos reais ele tem agora?*/
let j = 50
let b = 30
let a = 10
let resultado3 = ((j - b) -a)
//console.log('A quntidade que sobrou é ' + resultado3)

/*5. Problema de Multiplicação:
Uma caixa contém 8 pacotes de figurinhas. Se cada pacote tem 12 figurinhas, 
quantas figurinhas há no total na caixa?*/
let p = 8
let q = 12
let resultado4 = (p * q)
//console.log('A quntidade total de figurinhas é ' + resultado4)

/*6. Problema de Divisão:
Um agricultor tem 96 maçãs e quer dividi-las igualmente entre 8 cestas. 
Quantas maçãs vão para cada cesta?*/
let o = 96
let g = 8
let resultado5 = (o / g)
//console.log('A quntidade maçãs por cesto é ' + resultado5)

/*7.Problema de Proporção:
Em uma escola, a proporção de alunos que jogam futebol para os que jogam 
basquete é 3 para 2. Se há 90 alunos que jogam futebol, quantos alunos jogam 
basquete? */
let pf = 3
let pb = 2
let jf = 90
let resultado6 = (( pb * jf) / pf)
//console.log('A proporção de jogadores de basquete é ' + resultado6)

/*5. Problema de Razão e Proporção:
Em uma receita, são necessários 4 xícaras de farinha para cada 3 xícaras de 
açúcar. Se você tiver 12 xícaras de farinha, quantas xícaras de açúcar serão 
necessárias para manter a proporção?*/
let farinha = 4
let acucar = 3
let txicaras = 12
let resultado7 = (( acucar * txicaras) / farinha)
//console.log('A proporção de açucar é ' + resultado7)

/*Problema de Juros Simples:
Problema 1:
Maria emprestou R$ 1.500,00 para seu amigo João, com uma taxa 
de juros simples de 5% ao mês, durante 6 meses. Quantos reais 
João deverá devolver a Maria ao final do empréstimo?*/
let J
let M
let P = 1500
let t = 6
let i = 5
// Formulas J=P*t*i  --  M=J+P
J = P*t*(i/100)
//console.log('O valor dos juros é: ' + J)
M = J + P
//console.log('O valor total de devolução é: ' + M)


/*Problema de Juros Compostos:
Problema 2:
João investiu R$ 2.000,00 em uma conta de poupança, que oferece uma taxa de 
juros compostos de 3% ao mês. Qual será o saldo da conta de João após 12 meses,
considerando que os juros são aplicados sobre o valor total a cada mês?*/
let MC
let PC = 2000
let tc = 12
let ic = 3
MC = (PC * (1 + (ic / 100)) ** tc )
console.log('o Montante final é: ' + MC.toFixed(2))
