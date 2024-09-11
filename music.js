const audio = document.getElementById('background-music');


const unmuteImage = document.getElementById('unmute-image');
const muteImage = document.getElementById('mute-image');

function updateIconVisibility() {
    if (audio.muted) {
        unmuteImage.style.display = 'block';
        muteImage.style.display = 'none';
    } else {
        unmuteImage.style.display = 'none';
        muteImage.style.display = 'block';
    }
}

// Initial icon visibility
updateIconVisibility();

// Toggle mute/unmute and icon visibility on click
unmuteImage.addEventListener('click', function() {
    audio.muted = false;
    updateIconVisibility();
});

muteImage.addEventListener('click', function() {
    audio.muted = true;
    updateIconVisibility();
});