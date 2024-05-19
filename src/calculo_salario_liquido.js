const calcularImpostoRenda = require("./calculo_imposto_renda")
const calcularInss = require("./calculo_inss")

function calcularSalarioLiquido(salarioBruto){

    let impostoRenda = calcularImpostoRenda(salarioBruto);
    let inss = calcularInss(salarioBruto);

    let salarioLiquido = salarioBruto - impostoRenda - inss;

    return salarioLiquido;
}

module.exports = calcularSalarioLiquido;