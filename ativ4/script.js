function reajustar() {
    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);
    let resultado = document.getElementById('resultado');


    if (lado1 == lado2 && lado1 == lado3) {
        resultado.innerHTML = `O triângulo é equilátero`;
    } else if (lado1 != lado2 && lado1 == lado3 || lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1) {
        resultado.innerHTML = `O triângulo é isósceles`;
    } else {
        resultado.innerHTML = `O triângulo é escaleno`;
    }
}