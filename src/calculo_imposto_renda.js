function calcularImpostoRenda(salarioBruto){

    let descontoImposto = 0;

    if(salarioBruto <= 2112){
        descontoImposto = 0;
    }
    else if(salarioBruto <= 2826.65){
        descontoImposto = salarioBruto * 0.075;
    }
    else if(salarioBruto <= 3751.05){
        descontoImposto = salarioBruto * 0.15;
    }
    else if(salarioBruto <= 4664.68){
        descontoImposto = salarioBruto * 0.225;
    }
    else{
        descontoImposto = salarioBruto * 0.275;
    }

    return descontoImposto.toFixed(2);
}

module.exports = calcularImpostoRenda;