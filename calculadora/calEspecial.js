function opEspecial() {
  alert("Aqui vai mais opções de cálculos:");
  let num1 = Number(prompt("Qual o primeiro dígito?").replace(",", "."));
  let op = prompt("Qual a operação desejada? \n( !; ^; ²√'raiz')").toLowerCase();

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
    let num2 = Number(prompt("Qual o segundo dígito?").replace(",", "."));
    if (op == "^") {
      result = num1 ** num2;
      alert(num1 + "^" + num2 + "= " + result);
    } else {
      alert("Resposta inválida!");
    }
  }
}