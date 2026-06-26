const video = document.getElementById("video");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const fullscreen = document.getElementById("fullscreen");


play.onclick = () => video.play();


pause.onclick = () => video.pause();


stop.onclick = () => {
    video.pause();
    video.currentTime = 0;
};


video.onloadedmetadata = () => {
    duration.textContent = format(video.duration);
};


video.ontimeupdate = () => {

    progress.value =
        (video.currentTime / video.duration) * 100 || 0;

    current.textContent = format(video.currentTime);
};


progress.oninput = () => {

    video.currentTime =
        (progress.value / 100) * video.duration;
};


volume.oninput = () => {
    video.volume = volume.value;
};



function format(time){

    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    if(sec < 10)
        sec = "0" + sec;

    return `${min}:${sec}`;
}