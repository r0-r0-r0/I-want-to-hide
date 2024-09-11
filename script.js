// script.js
$(document).ready(function() {
  // Function to split text into words and wrap each in a span
  function splitTextIntoWords() {
      const $textElement = $('#interactive-text');
      const text = $textElement.text();
      const words = text.split(' ');
      const wrappedWords = words.map(word => `<span class="word">${word}</span>`).join(' ');

      $textElement.html(wrappedWords);
  }

  // Call the function to apply the split effect
  splitTextIntoWords();
});
