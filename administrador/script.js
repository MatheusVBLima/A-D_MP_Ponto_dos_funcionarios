const funcionariosBTN = document.querySelector('.funcionariosBTN')
const registroBTN = document.querySelector('.registroBTN')
const folhaBTN = document.querySelector('.folhaBTN')
const gestaoBTN = document.querySelector('.gestaoBTN')


funcionariosBTN.addEventListener('click', e => {
    funcionariosBTN.setAttribute('href', '../telas-compartilhadas/funcionarios/index.html')
})

registroBTN.addEventListener('click', e => {
    registroBTN.setAttribute('href', '../telas-compartilhadas/registro de atividade/index.html')
})

folhaBTN.addEventListener('click', e => {
    folhaBTN.setAttribute('href', '../telas-compartilhadas/folha de pagamento/index.html')
})

gestaoBTN.addEventListener('click', e => {
    gestaoBTN.setAttribute('href', './gestao fiscal/index.html')
})
