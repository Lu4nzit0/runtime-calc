/*
** Developed by PZL & Lu4nzit0 - dawn basic js mentoring!
** github.com/pzzzl github.com/Lu4nzit0
*/

let  n1, n2, number1, number2, result, options, operacao

n1 = document.getElementById("n1")
n2 = document.getElementById("n2")
result = document.getElementById("output")
options = document.getElementById("options")

function exec() {
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
} 

document.addEventListener("keyup", (event) => {
    exec()
})
document.addEventListener("change", (event) => {
    exec()
})