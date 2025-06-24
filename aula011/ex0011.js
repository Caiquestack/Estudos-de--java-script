var idade = 18
console.log(`Você tem ${idade}, anos.`)
if (idade < 16) {
    console.log('Voce não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é opicional!')
} else {
    console.log('Voto obrigatório!')
}