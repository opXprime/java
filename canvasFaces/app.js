
// Get canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = '500';
canvas.height = '500';


// fill canvas background //
ctx.fillStyle = '#dff6ff'; // light blue color
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Move origin to center of canvas
ctx.translate(canvas.width / 2, canvas.height / 2); 
ctx.fillStyle = 'Yellow'; // set fill color to yellow
ctx.strokeStyle = 'black'; // set stroke color to black
ctx.lineWidth = 4; // set line width for stroke

ctx.beginPath(); // start a new path // draw a circle for the face
ctx.arc(0, 0, 100, 0, Math.PI * 2); // x, y, radius, start angle, end angle
ctx.fill(); // fill the face with yellow color
ctx.borderColor = 'black'; // set border color to black
ctx.stroke(); // draw the border of the face


// Draw eyes
ctx.fillStyle = 'white'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 2; // set line width for eye border
ctx.beginPath();
ctx.arc(-40, -30, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();


ctx.fillStyle = 'white'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 2; // set line width for eye borders
ctx.beginPath();
ctx.arc(40, -30, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

//pupil design
ctx.fillStyle = 'black'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 2; // set line width for eye border
ctx.beginPath();
ctx.arc(-40, -30, 8, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();


//pupil design
ctx.fillStyle = 'black'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 2; // set line width for eye borders
ctx.beginPath();
ctx.arc(40, -30, 8, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

//mouth
ctx.fillStyle = 'Yellow'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 4; // set line width for eye borders
ctx.beginPath();
ctx.arc(0, 10, 45, 0, Math.PI);
ctx.fill();
ctx.stroke();


//cap
ctx.fillStyle = 'Blue'; // set fill color to white for eyes
ctx.strokeStyle = 'black'; // set stroke color to black for eyes
ctx.lineWidth = 4; // set line width for eye borders
ctx.beginPath();
ctx.arc(-80, -150, 65, 0, Math.PI/2);
ctx.fill();
ctx.stroke();