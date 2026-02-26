const video = document.getElementById("miVideo");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function subirVolumen() {
    if (video.volume < 1) video.volume = Math.min(video.volume + 0.1, 1);
}

function bajarVolumen() {
    if (video.volume > 0) video.volume = Math.max(video.volume - 0.1, 0);
}
