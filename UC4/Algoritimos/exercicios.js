//Calculo de IMC
/*function calcularImc() {
    let peso = 89
    let altura = 1.70
    let IMC = (peso / (altura ^ 2))
    console.log(IMC.toFixed(2))
}
calcularImc()*/

//Calculadora de Troco sem argumentos
/*function calculadoraTroco(){
    const troco = 0
    let valorPago = 100
    let valorCompra = 50
    console.log(troco = valorPago - valorCompra)
}
calculadoraTroco()*/

//Calculadora de Troco sem argumentos
/*function calculadoraTroco(valorPago, valorCompra){
    console.log(valorPago - valorCompra)
}
calculadoraTroco(100, 50)*/

//Calcule um numero e escreva na tela se é PAR ou IMPAR sem IF
/*function parOuImpar() {
    let n1 = 11
    const divisor = 2
    const resto = 0
    let resultado = n1 % divisor
    if (resultado === resto) {
        console.log('PAR')
    } else {
        console.log('IMPAR')
    }
}
parOuImpar()*/

/*function parOuImpar() {
    let n1 = 11
    const divisor = 2
    const resto = 0
    let resultado = n1 % divisor
    console.log(resultado === resto ? 'PAR' : 'IMPAR')
}
parOuImpar()*/

/*function parOuImpar() {
    console.log( '10' === 10 ? 'VERDADEIRO' : 'FALSO')
}
parOuImpar()*/

/*function celsiusFahrenheit(){

    // 1. Variável para a temperatura em Celsius
    const celsius = 25.8;
    
    // 2. Converte Celsius para Fahrenheit usando a fórmula
    const fahrenheit = celsius * (9 / 5) + 32;
    
    // 3. Verifica se a parte inteira de Fahrenheit é par ou ímpar usando o operador ternário
    const arredondado = Math.round(fahrenheit); // Opcional: arredonda para  baixo e garantir número inteiro
    const parOuImpar = (arredondado % 2 === 0) ? "Par" : "Ímpar";
    
    // 4. Exibe os resultados
    console.log(`Temperatura em Celsius: ${celsius}°C`);
    console.log(`Temperatura em Fahrenheit: ${fahrenheit}°F`);
    console.log(`Temperatura em Fahrenheit Arredondado: ${arredondado}°F`);
    console.log(`O valor de Fahrenheit é: ${parOuImpar}`);

    
    1. Constantes Matemáticas O Math possui propriedades fixas que retornam constantes muito usadas em engenharia e ciência:Math.PI: Retorna o valor do \(\pi \) (Pi), aproximadamente \(3.14159\).Math.E: Retorna a base dos logaritmos naturais (número de Euler), aproximadamente \(2.718\).Math.SQRT2: Retorna a raiz quadrada de 2, aproximadamente \(1.414\).
    
    2. Funções de Arredondamento Ideais para transformar números decimais em inteiros:Math.round(x): Arredonda um número para o inteiro mais próximo (para cima se a parte decimal for \(\ge 0.5\), para baixo se for \(<0.5\)).Math.floor(x): Arredonda o número sempre para baixo (para o menor inteiro mais próximo).Math.ceil(x): Arredonda o número sempre para cima (para o maior inteiro mais próximo).
    
    3. Operações Numéricas e Aritméticas Math.abs(x): Retorna o valor absoluto (sem o sinal negativo) de um número. Exemplo: Math.abs(-5) retorna 5.Math.max(n1, n2, ...): Analisa uma lista de números e retorna o maior deles.Math.min(n1, n2, ...): Analisa uma lista de números e retorna o menor deles.Math.pow(base, expoente): Calcula a potência de um número. Exemplo: Math.pow(2, 3) retorna \(8\).Math.sqrt(x): Retorna a raiz quadrada positiva de um número.
    
    4. Geração de Aleatoriedade Math.random(): Retorna um número pseudo-aleatório no intervalo entre \(0\) (inclusivo) e \(1\) (exclusivo). É muito utilizado para sortear itens, criar jogos e embaralhar dados.
    
    5. Funções Trigonométricas Úteis para computação gráfica, física e desenvolvimento de jogos:Math.sin(x): Retorna o seno de \(x\) (radianos).Math.cos(x): Retorna o cosseno de \(x\) (radianos).Math.tan(x): Retorna a tangente de \(x\) (radianos).
    
}
celsiusFahrenheit()*/
/*
function jurosSimples() {
    let J
    let M
    let P = 1500
    let i = 0.05
    let t = 6
    J = P*i*t
    M = P+J
    console.log('O valor dos juros é: ', J , ' e o valor total devolvido é: ', M)
}
jurosSimples()*/

/*
function jurosComposto(){
    let M
    let P = 2000
    let i = 0.03
    let t = 12
    M = P * (1 + i) ** t
    console.log('O saldo após 12 meses será: ', M.toFixed(2)) 
}
jurosComposto()*/

/*
function maioridade(){
    let idade = 15
    const maior = 18
    if(idade > maior){
        console.log('Idade maior que 18')
    }else if(idade === maior){
        console.log('Idade igual a 18')
    }else{
        console.log('Idade menor que 18')
    }
}
maioridade()*/








