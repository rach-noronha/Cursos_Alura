var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}
