var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou, pode ir ver seu Netflix";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Leia com Atenção";
  } else {
    elementoResultado.innerHTML =
      "Errou, a louça é sua, o numero era " + numeroSecreto;
  }
}
