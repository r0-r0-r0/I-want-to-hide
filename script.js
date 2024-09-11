document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('blurred-text');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let rect;

    // Function to create the canvas with blur effect
    function updateCanvas() {
        rect = textElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        document.body.appendChild(canvas);
    }

    function handleTouch(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Draw a small spot where the touch occurred
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2);
        context.fill();
    }

    // Initialize canvas size and attach event listeners
    updateCanvas();
    window.addEventListener('resize', updateCanvas);
    textElement.addEventListener('touchmove', handleTouch);
});
