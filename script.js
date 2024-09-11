document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('blurred-text');
    const canvas = document.getElementById('overlay-canvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        const rect = textElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        canvas.style.left = `${rect.left}px`;
        canvas.style.top = `${rect.top}px`;
    }

    function handleInteraction(event) {
        event.preventDefault(); // Prevent default actions
        const rect = canvas.getBoundingClientRect();
        let x, y;

        if (event.touches) {
            // For touch events
            const touch = event.touches[0];
            x = touch.clientX - rect.left;
            y = touch.clientY - rect.top;
        } else {
            // For mouse events
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }

        // Calculate if the interaction is within the text area
        const textRect = textElement.getBoundingClientRect();
        if (x >= 0 && x <= textRect.width && y >= 0 && y <= textRect.height) {
            textElement.style.filter = 'none'; // Remove the blur filter
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Attach event listeners for touch and mouse interactions
    canvas.addEventListener('touchstart', handleInteraction);
    canvas.addEventListener('mousedown', handleInteraction);
});
