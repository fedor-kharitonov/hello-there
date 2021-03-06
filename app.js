const canvas = document.getElementById('abc');
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

const ctx = canvas.getContext('2d');
const draw = () => {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50); // линия вправо
    ctx.lineTo(150, 150); // линия вниз
    ctx.lineTo(50, 150); // линия влево
    ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
    ctx.stroke();
    console.log(ctx);
};
