let num1 = document.getElementById('Inp-es1')
// esercizio 1
let num2 = document.getElementById('Inp2-es1')

let Btn1 = document.getElementById('BtnEs-1')
Btn1.addEventListener('click', function Es1() {

    let val1 = parseInt(num1.value);
    let val2 = parseInt(num2.value);


    let Res = document.getElementById('resEs1')
    let somma = 0
    somma = val1 + val2
    if ((val1 === 50 || val2 === 50) || (somma === 50)) {
        Res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'True'
        Res.appendChild(divR)
    }
    else {
        Res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'False'
        Res.appendChild(divR)
    }

    num1.value = ''
    num2.value = ''

})

// esercizio 2

let stringa = document.getElementById('Inp-es2')
let valore = document.getElementById('Inp2-es2')

let invio = document.getElementById('BtnEs-2')

invio.addEventListener('click', function es2() {
    let parola = stringa.value
    let val = parseInt(valore.value)


    let splitP = parola.split('')
    let lettera = splitP.splice(val, 1)
    let newParola = splitP.join('')




    let Res = document.getElementById('resEs2')
    let divR = document.createElement('div')
    divR.className = ('text-center')
    divR.innerText = newParola
    Res.appendChild(divR)
})

// esercizio 3

let input1Es3 = document.getElementById('Inp-es3')
let input2Es3 = document.getElementById('Inp2-es3')

let click = document.getElementById('BtnEs-3')
click.addEventListener('click', function es3() {
    let valore1 = parseInt(input1Es3.value)
    let valore2 = parseInt(input2Es3.value)

    if ((valore1 > 40 && valore1 < 60) || (valore1 > 70 && valore1 < 100) &&
        (valore2 > 40 && valore2 < 60) || (valore2 > 70 && valore2 < 100)) {

        let Res = document.getElementById('resEs3')
        Res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'True'
        Res.appendChild(divR)
    }
    else {
        let Res = document.getElementById('resEs3')
        Res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'False'
        Res.appendChild(divR)
    }
    input1Es3.value = ''
    input2Es3.value = ''

})

// Esercizio 4

let inpCittà = document.getElementById('Inp-es4')

let click4 = document.getElementById('BtnEs-4')
click4.addEventListener('click', function Es4() {
    let city = inpCittà.value.toLowerCase()

    let first = 'los'
    let second = 'new'

    if (city.includes(first) || city.includes(second)) {
        let res = document.getElementById('resEs4')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'True'
        res.appendChild(divR)

    }
    else {

        let res = document.getElementById('resEs4')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.innerText = 'False'
        res.appendChild(divR)
    }

    inpCittà.value = ''
})

// Esercizio 5

let input5 = document.getElementById('Inp-es5')
let lista = []
let click5 = document.getElementById('BtnEs-5')
click5.addEventListener('click', function es5() {

    let numeri = parseInt(input5.value)
    lista.push(numeri)
    console.log(lista)
    input5.value = ''


})


let click2Es5 = document.getElementById('Btn2Es-5')
let somma = 0
click2Es5.addEventListener('click', function es5() {
    for (i = 0; i < lista.length; i++) {

        somma += lista[i]

    }

    let res = document.getElementById('resEs5')
    res.innerHTML = ''
    let divR = document.createElement('div')
    divR.className = ('text-center')
    divR.textContent = somma
    res.appendChild(divR)

})

// Esercizio 6

let input6 = document.getElementById('Inp-es6')
let listaEs6 = []
let click6 = document.getElementById('BtnEs-6')
click6.addEventListener('click', function es6() {

    let numeri = parseInt(input6.value)
    listaEs6.push(numeri)
    console.log(listaEs6)
    input6.value = ''


})

let click2Es6 = document.getElementById('Btn2Es-6')

click2Es6.addEventListener('click', function es6pt2() {
    if (listaEs6.includes(1) || listaEs6.includes(3)) {
        let res = document.getElementById('resEs6')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'False'
        res.appendChild(divR)
    }
    else {
        let res = document.getElementById('resEs6')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'True'
        res.appendChild(divR)
    }

})

// Esercizio 7

let clickEs7 = document.getElementById('BtnEs-7')
let input7 = document.getElementById('Inp-es7')
clickEs7.addEventListener('click', function es7() {

    let gradi = parseInt(input7.value)

    if (gradi < 90) {
        let res = document.getElementById('resEs7')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'Acuto'
        res.appendChild(divR)
    }
    

    if (gradi > 90 && gradi < 180) {
        let res = document.getElementById('resEs7')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'Ottuso'
        res.appendChild(divR)
    }

    if (gradi === 90) {
        let res = document.getElementById('resEs7')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'Retto'
        res.appendChild(divR)
    }
    if (gradi > 180) {
        let res = document.getElementById('resEs7')
        res.innerHTML = ''
        let divR = document.createElement('div')
        divR.className = ('text-center')
        divR.textContent = 'Piatto'
        res.appendChild(divR)
    }


})


// Esercizio 8

let clickEs8 = document.getElementById('BtnEs-8')
let input8 = document.getElementById('Inp-es8')
clickEs8.addEventListener('click', function es8(){
    let frase = input8.value
    let divisione = frase.split(' ')
    let iniziali= ''
    for (parola of divisione){
        iniziali  += parola.charAt(0).toUpperCase()
        
    }
    
    let res = document.getElementById('resEs8')
    res.innerHTML = ''
    let divR = document.createElement('div')
    divR.className = ('text-center')
    divR.textContent = iniziali
    res.appendChild(divR)

})