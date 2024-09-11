document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('blurred-text');
    const canvas = document.getElementById('overlay-canvas');
    const context = canvas.getContext('2d');
    const clearRadius = 20; // Radius of the touch/mouse effect

    function resizeCanvas() {
        const rect = textElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        canvas.style.left = `${rect.left}px`;
        canvas.style.top = `${rect.top}px`;
    }

    function handleTouchMove(event) {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = event.touches ? event.touches[0] : event;
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x, y, clearRadius, 0, Math.PI * 2);
        context.fill();
    }

    function handleTouchEnd() {
        // Optional: You can clear the canvas if you want to reset the effect
    }

    function handleMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x, y, clearRadius, 0, Math.PI * 2);
        context.fill();
    }

    function handleMouseUp() {
        // Optional: You can clear the canvas if you want to reset the effect
    }

    // Initialize canvas size and attach event listeners
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Add touch and mouse event listeners
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
});
