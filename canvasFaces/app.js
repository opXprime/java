// Get canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 500;
canvas.height = 500;

// Background
ctx.fillStyle = '#dff6ff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//smiley
function face(ctx) {
  ctx.fillStyle = 'Yellow';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // eyes
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(-40, -30, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(40, -30, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // pupils
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(-40, -30, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(40, -30, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // mouth
  ctx.fillStyle = 'Yellow';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.arc(0, 10, 45, 0, Math.PI);
  ctx.fill();
  ctx.stroke();

 
}

// logic 
const w = canvas.width;
const h = canvas.height;

const radius = Math.min(w, h) / 4; // just for spacing 

// One in the middle
ctx.translate(w / 2, h / 2);
ctx.save();
face(ctx);
ctx.restore();

// One to the left
ctx.translate(-radius * 1.5, 0);
ctx.save();
ctx.scale(0.5, 0.5);
face(ctx);
ctx.restore();

// One to the right
ctx.translate(radius * 3, 0);
ctx.save();
ctx.scale(0.5, 0.5);
face(ctx);
ctx.restore();

// One to the top
ctx.translate(-radius * 1.5, -radius * 1.5);
ctx.save();
ctx.scale(0.5, 0.5);
face(ctx, radius / 2);
ctx.restore();

// One to the bottom
ctx.translate(0, radius * 3);
ctx.save();
ctx.scale(0.5, 0.5);
face(ctx);
ctx.restore();