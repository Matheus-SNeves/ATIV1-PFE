function reajustar() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let numero4 = Number(document.getElementById('numero4').value);
    let numero5 = Number(document.getElementById('numero5').value);
    let resultado = document.getElementById('resultado');

    let menor, maior;
    let meio1 = null, meio2 = null, meio3 = null;

    menor = numero1;
    if (numero2 < menor) menor = numero2;
    if (numero3 < menor) menor = numero3;
    if (numero4 < menor) menor = numero4;
    if (numero5 < menor) menor = numero5;

    maior = numero1;
    if (numero2 > maior) maior = numero2;
    if (numero3 > maior) maior = numero3;
    if (numero4 > maior) maior = numero4;
    if (numero5 > maior) maior = numero5;

    if (numero1 !== menor && numero1 !== maior) {
        meio1 = numero1;
    }
    if (numero2 !== menor && numero2 !== maior) {
        if (meio1 === null) {
            meio1 = numero2;
        } else {
            meio2 = numero2;
        }
    }
    if (numero3 !== menor && numero3 !== maior) {
        if (meio1 === null) {
            meio1 = numero3;
        } else if (meio2 === null) {
            meio2 = numero3;
        } else {
            meio3 = numero3;
        }
    }
    if (numero4 !== menor && numero4 !== maior) {
        if (meio1 === null) {
            meio1 = numero4;
        } else if (meio2 === null) {
            meio2 = numero4;
        } else {
            meio3 = numero4;
        }
    }
    if (numero5 !== menor && numero5 !== maior) {
        if (meio1 === null) {
            meio1 = numero5;
        } else if (meio2 === null) {
            meio2 = numero5;
        } else {
            meio3 = numero5;
        }
    }

    if (meio1 !== null && meio2 !== null && meio3 !== null) {
        if (meio1 > meio2) {
            [meio1, meio2] = [meio2, meio1];
        }
        if (meio2 > meio3) {
            [meio2, meio3] = [meio3, meio2];
        }
        if (meio1 > meio2) {
            [meio1, meio2] = [meio2, meio1];
        }
    }

    resultado.innerHTML = `Os números em ordem crescente são: ${menor}, ${meio1 || ''}, ${meio2 || ''}, ${meio3 || ''}, ${maior}`;
}