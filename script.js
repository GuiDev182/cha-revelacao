// Data do evento: 05/12/2025 às 19:30 (formato brasileiro)
// No JavaScript, meses vão de 0 a 11, então dezembro é 11.
const dataEvento = new Date(2025, 11, 5, 19, 30, 0); // 05/12/2025 19:30

const diasEl = document.getElementById("days");
const horasEl = document.getElementById("hours");
const minutosEl = document.getElementById("minutes");
const segundosEl = document.getElementById("seconds");
const mensagemFinalEl = document.getElementById("mensagem-final");

function atualizarContagem() {
    const agora = new Date().getTime();
    const alvo = dataEvento.getTime();
    const diferenca = alvo - agora;

    if (diferenca <= 0) {
        diasEl.textContent = "00";
        horasEl.textContent = "00";
        minutosEl.textContent = "00";
        segundosEl.textContent = "00";
        mensagemFinalEl.textContent = "É HOJE! Que venha a Aurora ou o João Miguel!!";
        clearInterval(intervalo);
        return;
    }

    const segundosTotal = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotal / (60 * 60 * 24));
    const horas = Math.floor((segundosTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotal % (60 * 60)) / 60);
    const segundos = segundosTotal % 60;

    diasEl.textContent = String(dias).padStart(2, "0");
    horasEl.textContent = String(horas).padStart(2, "0");
    minutosEl.textContent = String(minutos).padStart(2, "0");
    segundosEl.textContent = String(segundos).padStart(2, "0");
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();
