function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');

    filhos = filhos * 45;

    let salariofinal = Number(document.getElementById('salariofinal'));
    salariofinal = filhos + salario;
    resultado.innerHTML = `Salário Família: ${filhos.toFixed(2)} <br> Salário Final: R$${salariofinal.toFixed(2)}`;
}