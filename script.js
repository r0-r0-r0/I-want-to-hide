// script.js
$(document).ready(function() {
  function splitTextIntoWords() {
      const $textElement = $('#interactive-text');
      const text = $textElement.text();
      const words = text.split(' ');
      const wrappedWords = words.map(word => `<span class="word">${word}</span>`).join(' ');

      $textElement.html(wrappedWords);
  }

  splitTextIntoWords();

  // Add touch event handling
  $('.word').on('touchstart', function() {
      $(this).css('filter', 'blur(0px)');
  }).on('touchend', function() {
      $(this).css('filter', 'blur(5px)');
  });
});



function isMobileSafari() {
  return /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream && /AppleWebKit/.test(navigator.userAgent);
}

$(document).ready(function() {
  if (isMobileSafari()) {
      $('#compatibility-notice').show();
  }
});