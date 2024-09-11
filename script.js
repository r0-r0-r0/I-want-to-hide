document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('blurred-text');
    const blurAmount = 8; // Initial blur amount
    const clearRadius = 20; // Radius of the touch effect

    // Create a canvas overlay for touch effects
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let rect;

    function updateCanvas() {
        rect = textElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.position = 'absolute';
        canvas.style.left = `${rect.left}px`;
        canvas.style.top = `${rect.top}px`;
        document.body.appendChild(canvas);
        context.globalCompositeOperation = 'destination-out';
    }

    function handleTouch(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Clear a portion of the blur effect where the touch occurred
        context.beginPath();
        context.arc(x, y, clearRadius, 0, Math.PI * 2);
        context.fill();
    }

    function handleTouchEnd() {
        // Reset the canvas after touch ends
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Initialize canvas size and attach event listeners
    updateCanvas();
    window.addEventListener('resize', updateCanvas);
    textElement.addEventListener('touchmove', handleTouch);
    textElement.addEventListener('touchend', handleTouchEnd);
});
