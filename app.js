const canvas = document.getElementById('abc');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50); // линия вправо
ctx.lineTo(150, 150); // линия вниз
ctx.lineTo(50, 150); // линия влево
ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
ctx.stroke();

console.log(ctx);