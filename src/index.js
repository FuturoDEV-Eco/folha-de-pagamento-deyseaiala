const calcularImpostoRenda = require("./calculo_imposto_renda")
const calcularInss = require("./calculo_inss")
const calcularSalarioLiquido = require("./calculo_salario_liquido")

console.log(calcularImpostoRenda(3751.05))
console.log(calcularInss(3751.05))
console.log(calcularSalarioLiquido(3751.05))
