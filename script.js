$(document).ready(function() {
    function splitTextIntoWords() {
        const $textElement = $('#interactive-text');
        const text = $textElement.text();
        const words = text.split(' ');
        const wrappedWords = words.map(word => `<span class="word">${word}</span>`).join(' ');

        $textElement.html(wrappedWords);
    }

    // Display text with line breaks
    const textElement = document.getElementById('interactive-text');
    const sentences = [
        "I fear being alone.",
        "Terrified that you’ll see.",
        "Afraid of your disappointment.",
        "I struggle to breathe.",
        "I struggle to be.",
        "I long for love.",
        "To hold your secrets close,"
    ];
    textElement.innerHTML = sentences.join('   '); // Adds line breaks between sentences

    // Apply text wrapping and touch event handling
    splitTextIntoWords();

    // Add touch event handling
    $(document).on('touchstart', '.word', function() {
        $(this).css('filter', 'blur(0px)');
    }).on('touchend', '.word', function() {
        $(this).css('filter', 'blur(5px)');
    });

    // Prevent default touch actions
    $('#interactive-text').on('touchstart touchmove', function(event) {
        event.preventDefault();
    });

    // Prevent dragging of images or other elements if needed
    $('img').on('dragstart', function(event) {
        event.preventDefault();
    });

    // Compatibility notice for Mobile Safari
    function isMobileSafari() {
        return /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream && /AppleWebKit/.test(navigator.userAgent);
    }

    if (isMobileSafari()) {
        $('#compatibility-notice').show();
    }
});

window.addEventListener('load', function() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var fakepink = document.querySelector('.fakepink');
    if (fakepink) {
        fakepink.addEventListener('animationend', function() {
            fakepink.classList.add('remove');
        });
    }
});
