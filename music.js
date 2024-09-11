const audio = document.getElementById('background-music');
        const image = document.getElementById('unmute-image');

        // Toggle mute/unmute and change image
        image.addEventListener('click', function() {
            if (audio.muted) {
                audio.muted = false;
                image.src = 'mute.png'; // Change to mute icon
            } else {
                audio.muted = true;
                image.src = 'unmute.png'; // Change to unmute icon
            }
        });