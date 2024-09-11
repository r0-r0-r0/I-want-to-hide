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
      "I want to hide.",
      "I fear being alone.",
      "Terrified that you’ll see.",
      "Afraid of your disappointment.",
      "I struggle to breathe.",
      "I struggle to be.",
      "I long for love.",
      "To hold your secrets close,",
      "All the shame in me"
  ];
  textElement.innerHTML = sentences.join('                  '); // Adds line breaks between sentences

  // Apply text wrapping and touch event handling
  splitTextIntoWords();

  // Add touch event handling
  $('.word').on('touchstart', function() {
      $(this).css('filter', 'blur(0px)');
  }).on('touchend', function() {
      $(this).css('filter', 'blur(5px)');
  });

  // Compatibility notice for Mobile Safari
  function isMobileSafari() {
      return /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream && /AppleWebKit/.test(navigator.userAgent);
  }

  if (isMobileSafari()) {
      $('#compatibility-notice').show();
  }
});


