/*
** Developed by PZL
** github.com/pzzzl
**
** Developed by Lu4nzit0
** github.com/Lu4nzit0
**
** REFERÊNCIAS HTML
** IDs
** NÚMERO 1: "n1"
** BOX OPÇÕES: "options"
**      **value**
**      • soma
**      • subt
**      • mult
**      • div
** NÚMERO 2: "n2"
** SAÍDA: "output"
*/

let e = event
let number1, number2, result, n1, n2, options, operacao

n1 = document.getElementById("n1")
n2 = document.getElementById("n2")
result = document.getElementById("output")
options = document.getElementById("options")

document.addEventListener("keyup", e => {
// Código vai aqui

number1 = +n1.value 
number2 = +n2.value
operacao = options.value

if(operacao == "soma") {
    result.value = number1 + number2
}

else if(operacao == "subt") {
    result.value = number1 - number2
}

else if(operacao == "mult") {
    result.value = number1 * number2
}

else {
    result.value = number1 / number2
}
// Código acaba aqui
})

options.addEventListener('change', (event) => {
    operacao = options.value

    if(operacao == "soma") {
        result.value = number1 + number2
    }
    
    else if(operacao == "subt") {
        result.value = number1 - number2
    }
    
    else if(operacao == "mult") {
        result.value = number1 * number2
    }
    
    else {
        result.value = number1 / number2
    }
})