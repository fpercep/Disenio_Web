const audio = document.getElementById("miAudio");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
const barra = document.getElementById("miBarra");

btnPlay.addEventListener("click", function() {
    audio.play();
});

btnPause.addEventListener("click", function() {
    audio.pause();
});

btnReset.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.pause();
});

audio.addEventListener("loadedmetadata", function() {
    barra.max = audio.duration;
});

audio.addEventListener("timeupdate", function() {
    barra.value = audio.currentTime;
});

barra.addEventListener("input", function() {
    audio.currentTime = barra.value;
});