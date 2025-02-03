function calcularDesconto() {
    let tipo = document.getElementById('tipo').value;
    let preco = Number(document.getElementById('preco').value);
    
    const descontos = {
        'camisa': 0.20,
        'bermuda': 0.10,
        'calca': 0.15
    };

    let desconto = descontos[tipo] || 0;
    let precoFinal = preco - (preco * desconto);
    document.getElementById('resultado').innerHTML = `Preço final: R$ ${precoFinal.toFixed(2)}`;
}