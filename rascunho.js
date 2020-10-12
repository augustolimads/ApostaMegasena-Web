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
        soma: 0
    }
    apostaSeca.forEach(item => {
        parImparObj.soma += item
        parImpar(item) ? parImparObj.par++ : parImparObj.impar++
    })
    return parImparObj
}

function par4impar2(){ //sai 4 pares e 2 impares
    let apostaAtual = apostaSeca()
    let qtdParImpar = contParImpar(apostaAtual)
    return qtdParImpar.par == 4? apostaAtual : par4impar2()
}
console.log(contParImpar(apostaSeca()))
console.log(par4impar2())