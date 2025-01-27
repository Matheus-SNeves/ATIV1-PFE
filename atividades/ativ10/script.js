function reajustar() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let notafinal = (nota1 + nota2 + nota3)/3;
    let resultado = document.getElementById('resultado');

    if(notafinal >= 6){
        resultado.innerHTML = `Aprovado com ${notafinal.toFixed(2)}`;
    } else if(notafinal < 6 && notafinal >= 4){
        resultado.innerHTML = `Recuperação com ${notafinal.toFixed(2)}`;
    } else{
        resultado.innerHTML = `Reprovado com ${notafinal.toFixed(2)}`;
    }
}