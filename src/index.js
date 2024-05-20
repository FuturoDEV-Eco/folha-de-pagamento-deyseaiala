const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');
const PDFDocument = require('pdfkit');
const fs = require('fs');


function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}


const input = readline.createInterface(
    process.stdin,
    process.stdout
   );

   input.question("Informe o mês em número.", (mes) => {
   

    input.question("Qual o nome do funcionário?", (funcionario) => {
        

        input.question("Qual o CPF?", (cpf) => {
           
            

            input.question("Qual o salário bruto do funcionário?", (salarioBruto) => {


                console.log(`--- Folha de pagamento mês: ${mes} ---`);
                console.log(`Folha de pagamento. Nome: ${funcionario}`)
                console.log(`CPF: ${cpf}`)
                console.log(`Salário Bruto: R$ ${salarioBruto}`);
                console.log(`INSS: R$ ${calcularInss(salarioBruto)}`);
                console.log(`Imposto de Renda: R$ ${calcularImpostoRenda(salarioBruto)}`);
                console.log(`Salário Líquido: R$ ${calcularSalarioLiquido(salarioBruto)}`);

             

                        let dataAtual = new Date().toLocaleDateString()

                        const doc = new PDFDocument;
                        doc.pipe(fs.createWriteStream('holerite.pdf'));
                        doc.fontSize(12);

                        doc.text('--- Folha de pagamento ---')
                        doc.text(`Data de Geração: ${dataAtual}`)
                        doc.text(`Nome: ${funcionario}`)
                        doc.text(`CPF: ${formatarCPF(cpf)}`)
                        doc.text('--- ---')
                        doc.text(`Salário Bruto: ${salarioBruto}`)
                        doc.text('--- ---')
                        doc.text(`INSS: ${calcularInss(salarioBruto)}`)
                        doc.text(`Imposto de Renda: ${calcularImpostoRenda(salarioBruto)}`)
                        doc.text('--- ---')
                        doc.text(`Salário Líquido: ${calcularSalarioLiquido(salarioBruto)}`)
                        doc.end()

               
                    input.close();
          

                
            })
        })

    })
}) 



   