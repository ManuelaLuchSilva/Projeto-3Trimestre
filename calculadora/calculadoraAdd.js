const Base = document.createElement("script");
Base.src = "calculadoraBase.js";
document.head.appendChild(Base)

let result = document.getElementById("resultado");
let resultado = 0;
let operacao = "";
let stop = false;
let history = document.getElementById("history");

function limpar() {
  result.value = "";
  history.innerHTML = "";
  operacao = "";
}

function del() {
  let ultimo = result.value.slice(-1);
  let NewResult;
  if (
    !isNaN(ultimo) ||
    ultimo === "+" ||
    ultimo === "-" ||
    ultimo === "*" ||
    ultimo === "/"
  ) {
    NewResult = result.value.slice(0, -1);
  } else if (!isFinite(ultimo)) {
    NewResult = result.value.slice(0, -8);
  } else if (isNaN(ultimo)) {
    NewResult = result.value.slice(0, -3);
  }
  result.value = NewResult;
}

