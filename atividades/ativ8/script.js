function reajustar() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');

    if (numero1 > numero2) {
        resultado.innerHTML = `O número maior é p ${numero1} e o menor é o ${numero2}`;
    }else{
        resultado.innerHTML = `O número menor é o ${numero1} e o maior é o ${numero2}`;
    }
}