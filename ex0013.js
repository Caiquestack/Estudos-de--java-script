var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('sabado')
        break

    default:
        console.log('[ERRO] dia inválido!')
}