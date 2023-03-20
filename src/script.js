function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.17;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Reais é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  //valor do dólar baseado em 5,17 reais o dólar
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmBitcoin = valorEmDolarNumerico * 0.000036;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido2 = "O resultado em Bitcoins é ₿" + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido2;

  //valor do bitcoin baseado em 0,000036 bitcoins o dólar
}
