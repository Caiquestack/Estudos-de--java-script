var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são esatamente: ${hora} Horas.`)
if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora <= 23) {
    console.log('Boa noite!')
}