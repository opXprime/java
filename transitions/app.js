const barContainers = document.querySelectorAll('.bars');
barContainers.forEach(container => {
    const count = Number(container.dataset.count || 24);
    for (let i = 0; i < count; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
    


bar.style.animationDelay = `${i * 40}ms`;

        container.appendChild(bar);
    }           
});

// Select one canvas (use the first 200x200 canvas)
const canvas = document.querySelector('#demo-1 canvas[width="200"]');
const ctx = canvas.getContext('2d');

// Clear
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Basic styling
ctx.strokeStyle = "#333";
ctx.lineWidth = 4;
ctx.lineCap = "round";

// Helper function to draw line
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// ===== Simple Hangman =====

// Head (circle)
ctx.beginPath();
ctx.arc(100, 40, 20, 0, Math.PI * 2);
ctx.stroke();

// Body
line(100, 60, 100, 120);

// Left arm
line(100, 80, 70, 100);

// Right arm
line(100, 80, 130, 100);

// Left leg
line(100, 120, 75, 160);

// Right leg
line(100, 120, 125, 160);

ctx.fillStyle = "red";