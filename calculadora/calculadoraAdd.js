const Base = document.createElement("script");
Base.src = "calculadoraBase.js";
document.head.appendChild(Base);

let result = document.getElementById("resultado");
let resultado = 0;
let operacao = "";
let stop = false;
let history = document.getElementById("history");

function limpar() {
  result.value = "";
  history.innerHTML = "";
  operacao = "";
  stop = false;
}

function del() {
  let ultimo = result.value.slice(-1);
  let NewResult;
  if ( !isNaN(ultimo) || ultimo === "+" || ultimo === "-" || ultimo === "*" || ultimo === "/"
  ) {
    NewResult = result.value.slice(0, -1);
  } else if (!isFinite(ultimo)) {
    NewResult = result.value.slice(0, -8);
  } else if (isNaN(ultimo)) {
    NewResult = result.value.slice(0, -3);
  }
  result.value = NewResult;
}

document.addEventListener("keydown", function (num) {
  if (num.key >= 0 && num.key <= 9) {
    result.value = result.value + num.key;
    history.innerHTML = result.value;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") {
    total();
    op = e.key;
    operacao = op;
    result.value = result.value + e.key;
    history.innerHTML = result.value;
    stop = false;
  }
  else if (e.key == ".") {
  }
});

document.addEventListener("keypress", function (enter) {
  if (enter.key == 'Enter') {
    let numeros = result.value.split(operacao);

    if (numeros[1] == "") {
      result.value = result.value + "0";
      numeros[1] = 0;
    }
    

    document.getElementById("history").innerHTML = result.value;

    switch (operacao) {
      case "+":
        resultado = Number(numeros[0]) + Number(numeros[1]);
        result.value = Number(numeros[0]) + Number(numeros[1]);
        document.getElementById("history").innerHTML =
          Number(numeros[0]) + " + " + Number(numeros[1]) + " = " + resultado;
        break;

      case "-":
        resultado = numeros[0] - numeros[1];
        result.value = Number(numeros[0]) - Number(numeros[1]);
        document.getElementById("history").innerHTML =
          Number(numeros[0]) + " - " + Number(numeros[1]) + " = " + resultado;
        break;

      case "*":
        resultado = numeros[0] * numeros[1];
        result.value = Number(numeros[0]) * Number(numeros[1]);
        document.getElementById("history").innerHTML =
          Number(numeros[0]) + " x " + Number(numeros[1]) + " = " + resultado;
        break;

      case "/":
        resultado = numeros[0] / numeros[1];
        result.value = Number(numeros[0]) / Number(numeros[1]);
        document.getElementById("history").innerHTML =
          Number(numeros[0]) + " / " + Number(numeros[1]) + " = " + resultado;
        break;
    }
    stop = true;
  }
});

