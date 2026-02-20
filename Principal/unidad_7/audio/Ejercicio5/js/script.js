const audio = document.getElementById("miAudio");
const estadoTexto = document.getElementById("estadoTexto");

function reproducirAudio() {
    audio.play();
    estadoTexto.textContent = "Reproduciendo";
}

function pausarAudio() {
    audio.pause();
    estadoTexto.textContent = "Pausado";
}

function reiniciarAudio() {
    // Vuelve el tiempo al inicio
    audio.currentTime = 0;
    // Si se desea que además se detenga, se llama a pause()
    audio.pause();
    estadoTexto.textContent = "Pausado";
}