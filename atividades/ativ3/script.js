function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');


    if (salario <= 1212.00) {
        salario = salario * 1.075;
        resultado.innerHTML = `O salário reajustado será de: ${salario.toFixed(2)}`;
    } else if (salario > 1212.01 && salario < 2427.35) {
        salario = salario * 1.09;
        resultado.innerHTML = `O salário reajustado será de: ${salario.toFixed(2)}`;
    } else if (salario > 2427.36 && salario < 3641.03) {
        salario = salario * 1.12;
        resultado.innerHTML = `O salário reajustado será de: ${salario.toFixed(2)}`;
    } else{
        salario = salario * 1.14;
        resultado.innerHTML = `O salário reajustado será de: ${salario.toFixed(2)}`;
    }
}