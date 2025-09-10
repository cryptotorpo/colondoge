const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️'; // Change icon to pause
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️'; // Change icon to play
    }
});
