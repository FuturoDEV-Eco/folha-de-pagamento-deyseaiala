const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');

function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const input = readline.createInterface(
    process.stdin,
    process.stdout
   );

   input.question("Informe o mês em número.", (mes) => {
    //console.log(`Folha de pagamento mês: ${mes}`);

    input.question("Qual o nome do funcionário?", (funcionario) => {
        //console.log(`Folha de pagamento. Nome: ${funcionario}`)

        input.question("Qual o CPF?", (cpf) => {
            formatarCPF(cpf);
            //console.log(`CPF: ${cpf}`)

            input.question("Qual o salário bruto do funcionário?", (salarioBruto) => {


                console.log(`--- Folha de pagamento mês: ${mes} ---`);
                console.log(`Folha de pagamento. Nome: ${funcionario}`)
                console.log(`CPF: ${cpf}`)
                console.log(`Salário Bruto: R$ ${salarioBruto}`);
                console.log(`INSS: R$ ${calcularInss(salarioBruto)}`);
                console.log(`Imposto de Renda: R$ ${calcularImpostoRenda(salarioBruto)}`);
                console.log(`Salário Líquido: R$ ${calcularSalarioLiquido(salarioBruto)}`);
                input.close();
            })
        })

    })
}) 



   