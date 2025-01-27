function reajustar() {
    let mercadoria = document.getElementById('mercadoria').value;
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');


    if (preco < 1000) {
        preco = preco * 1.05;
        resultado.innerHTML = `A mercadoria ${mercadoria} terá um aumento de ${preco.toFixed(2)}`;
    } else {
        preco = preco * 1.07;
        resultado.innerHTML = `A mercadoria ${mercadoria} terá um aumento de ${preco.toFixed(2)}`;
    }
}