function randint(lower, upper) { //regra do random com numeros inteiros
    rand = Math.random()
    return Math.floor(rand * (upper - lower) + lower)
}

function apostaSeca() { //aposta sem tratamento
    let seisNumeros = []
    for (let i = 0; i < 6; i++) {
        seisNumeros.push(randint(1, 60))
    }
    return seisNumeros
}
/* ######################################################### */
//testa pares e impares deve ter 4 pares e 2 impares
function parImpar(numero) { //par é true, impar é false
    return numero % 2 === 0
}

function contParImpar(apostaSeca) { //contagem de par e impar e somatorio
    let parImparObj = {
        par: 0,
        impar: 0,
        soma: 0,
        fibonacci: 0
    }
    
    apostaSeca.forEach(item => {
        parImparObj.soma += item

        parImpar(item)? parImparObj.par++ : parImparObj.impar++
    })
    return parImparObj
}
//se a soma é igual as estatisticas
function rangeSum(soma) {
    return (soma >= 118 && soma <= 247)
}

function fibonacci(sequencia){
    const numFibonacci = [1,2,3,5,8,13,21,34,55]
    let somaFibonacci = 0
    sequencia.forEach(item => {
        numFibonacci.forEach(num => {if(num === item){somaFibonacci++}})
    })
    return somaFibonacci
}

function multiplos3(sequencia){
    let somaMultiplos = 0
    sequencia.forEach(item => {
        if(item % 3 == 0){somaMultiplos++}
    })
    return somaMultiplos
}

function numPrimos(sequencia){
    const numPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
    let somaPrimos = 0
    sequencia.forEach(item => {
        numPrimos.forEach(num => {if(num === item){somaPrimos++}})
    })
    return somaPrimos
}

function top10(sequencia){ //10 mais atrasados e 10 populares
    const top10 = {
        atrasados: [39, 2, 9, 20, 31, 15, 3, 13, 50, 29],
        populares: [10, 53, 05, 23, 33, 4, 54, 24, 42, 51]
    }
    somaTop10 = 0
    sequencia.forEach(item => {
        top10.atrasados.forEach(num => {if(num === item){somaTop10++}})
        top10.populares.forEach(num => {if(num === item){somaTop10++}})
    })
    return somaTop10
}

function numDif(sequencia){
    
}

function testes() { //testa todas as funcoes acima
    const apostaAtual = apostaSeca()
    let qtdParImpar = contParImpar(apostaAtual)
    return (qtdParImpar.par == 4 || qtdParImpar.par == 3)
    && rangeSum(qtdParImpar.soma) 
    && (fibonacci(apostaAtual) <= 2)
    && (numPrimos(apostaAtual) <= 3)
    && (multiplos3(apostaAtual) >= 1 && multiplos3(apostaAtual) <= 3)
    && (top10(apostaAtual) <= 2)
    <= 2? apostaAtual : testes()
}

/* ######################################################### */
function ExibeAposta() {
    const aposte = document.querySelector('#aposte')
    aposte.innerText = ` jogo: ${testes().join(' ')}`
}

ExibeAposta()