function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');

    if (salario >= 1500.00 && salario < 1750.00) {
        salario = salario * 1.15;
        resultado.innerHTML = `Reajuste de 15%: ${salario.toFixed(2)}`;
    } else if (salario >= 1750.00 && salario < 2000.00) {
        salario = salario * 1.12;
        resultado.innerHTML = `Reajuste de 12%: ${salario.toFixed(2)}`;
    } else if (salario >= 2000.00 && salario < 3000.00) {
        salario = salario * 1.09;
        resultado.innerHTML = `Reajuste de 9%: ${salario.toFixed(2)}`;
    } else if (salario >= 3000.00) {
        salario = salario * 1.06;
        resultado.innerHTML = `Reajuste de 6%: ${salario.toFixed(2)}`;
    } else {
        resultado.innerHTML = "Salário abaixo do limite para reajuste.";
    }
}