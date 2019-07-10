const anchor = document.querySelector('#header a');
const video = document.querySelector("#header video");

video.addEventListener('canplaythrough', () => {
    video.muted = true;
    video.play();
});

video.addEventListener('ended', () => {
    anchor.classList.remove('hidden');
});
