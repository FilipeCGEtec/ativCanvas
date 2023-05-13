const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
//arco direito do coração
ctx.moveTo(100,75);
ctx.arc(75,75, 25, 0, Math.PI, true);
ctx.stroke();
//curva esquerda do coração
ctx.beginPath();
ctx.moveTo(50, 75);
ctx.quadraticCurveTo(50, 100, 100, 150);
ctx.stroke();
//arco direito go coração
ctx.moveTo(150,75);
ctx.arc(125,75, 25, 0, Math.PI, true);
ctx.stroke();
//curva direita do coração
ctx.beginPath();
ctx.moveTo(150, 75);
ctx.quadraticCurveTo(150, 100, 100, 150);
ctx.stroke();
//base
ctx.fillStyle = 'red';
ctx.fillRect(50, 150, 100, 5);

//imagem
//cria uma variavel de imagem
var foto = new Image;
foto.src = '../img/gato.png';
