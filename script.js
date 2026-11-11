const countdown = document.getElementById("countdown");

let horas = 11;
let minutos = 59;
let segundos = 59;

function atualizarContador() {

    if (segundos > 0) {
        segundos--;
    } else {
        segundos = 59;

        if (minutos > 0) {
            minutos--;
        } else {
            minutos = 59;

            if (horas > 0) {
                horas--;
            } else {
                clearInterval(intervalo);
                countdown.textContent = "00:00:00";
                return;
            }
        }
    }

    countdown.textContent =
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");
}

atualizarContador();

const intervalo = setInterval(atualizarContador, 1000);