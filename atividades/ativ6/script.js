function reajustar() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let numero4 = Number(document.getElementById('numero4').value);
    let numero5 = Number(document.getElementById('numero5').value);
    let numero6 = Number(document.getElementById('numero6').value);
    let resultado = document.getElementById('resultado');

    let maiorNumero = numero1;

    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3;
    }
    if (numero4 > maiorNumero) {
        maiorNumero = numero4;
    }
    if (numero5 > maiorNumero) {
        maiorNumero = numero5;
    }
    if (numero6 > maiorNumero) {
        maiorNumero = numero6;
    }

    resultado.innerHTML = `O maior número é o ${maiorNumero}`;
}