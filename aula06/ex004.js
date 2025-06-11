var nome = window.prompt(' Qual é o  seu nome ?')
document.write(`Olá <strong>${nome}</strong>,seu nome tem  ${nome.length} letras.<br/>`)
document.write(` Seu nome ${nome}, em maiusculo é ${nome.toUpperCase()}.<br/>`)
document.write(` Seu nome ${nome}, em minusculo é ${nome.toLowerCase()}.`)
// document.write ele mostra o texto na tela em vez de usar o window.alert. Mas ele vai aparecer na tela do sith.