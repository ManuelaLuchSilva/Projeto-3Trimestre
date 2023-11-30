let result = document.getElementById("resultado");
let operacao = "";
let stop = false;
let history = document.getElementById("history")

function limpar() {
    result.value = "";
    history.innerHTML = "";
    operacao = "";
}

function add_numero(string) {
    if (!stop) {
        if (string === "." && result.value.indexOf(".") != -1) {
            result.value == result.value + string;
            history.value == result.value;
        }
    } else {
        if (string === "." && result.value.indexOf(".") === -1) {
            result.value = "";
            stop = false;
            history.innerHTML = "";
            operacao = "";
            result.value = result.value + string;
        }
    }
}

function add_operador(op) {
    if (result.value == "") {
        result.value = "0"
    }
    if (operacao == "") {
        operacao = op;
        result.value = result.value + op;
    } else {
        total()
        result.value = result.value + op;
        operacao = op;
        stop = false;
    }
}

function total() {
    if (!stop) {
        let numeros = result.value.split(operacao);

        if (numeros[1] == "") {
            result.value = result.value + "0";
            numeros[1] = 0;

        }

        document.getElementById("history").innerHTML = result.value;

        switch (operacao) {
            case "+":
                result.value = Number(numeros[0]) + Number(numeros[1]);
                break;

            case "-":
                result.value = numeros[0] - numeros[1];
                break;

            case "*":
                result.value = numeros[0] * numeros[1];
                break;

            case "/":
                result.value = numeros[0] / numeros[1];
                break;
        }


        stop = true;
    }
}