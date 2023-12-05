function opEspecial() {
  alert("Aqui esta mais opções de calculos:");
  let num1 = Number(prompt("Qual o primeiro digito?").replace(",", "."));
  let op = prompt(
    "Qual a operação desejada? \n( !; ^; ²√'raiz')"
  ).toLowerCase();

  let result = 1;
  if (op == "!") {
    if (num1 === 0 || num1 === 1) {
      alert(num1 + "!" + " = 1");
    }
    for (let contador = num1; contador >= 1; contador--) {
      result = result * contador;
    }
    alert(num1 + "!" + " = " + result);
  } else if (op == "raiz") {
    let result = Math.sqrt(num1);
    alert("²√" + num1 + " = " + result);
  } else {
    let num2 = Number(prompt("Qual o segundo digito?").replace(",", "."));
    if (op == "^") {
      result = num1 ** num2;
      alert(num1);
    } else {
      alert("Resposta invalida!");
    }
  }
}
