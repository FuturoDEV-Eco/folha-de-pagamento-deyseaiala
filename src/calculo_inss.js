function calcularInss(salarioBruto){
    let descontoInss = 0
    const tetoInss = 908.85
    
    if(salarioBruto <= 1412.00){
        descontoInss = salarioBruto * 0.075
    }
    else if(salarioBruto <= 2666.68){
        descontoInss = salarioBruto * 0.09
    }
    else if(salarioBruto <= 4000.03){
        descontoInss = salarioBruto * 0.12
    }
    else{
        descontoInss = salarioBruto * 0.14
    }


    if(descontoInss >= tetoInss){
        descontoInss = tetoInss
    }

    return descontoInss;
}

module.exports = calcularInss;
