const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

function circulo(){
    //circulo
    ctx.beginPath();
    ctx.moveTo(350,75);
    ctx.arc(300,75, 25, 0, Math.PI*2, true);
    ctx.stroke();
}


function retangulo(){
    //retangulo
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(300, 350, 320, 360);
}


function linha(){
    //linha
    ctx.beginPath();
    ctx.moveTo(300,220);
    ctx.lineTo(360,330);
    ctx.stroke();
}


function curva(){
    //curva
    ctx.beginPath();
    ctx.moveTo(400, 30);
    ctx.bezierCurveTo(400, 320, 450, 20, 425, 30);
    ctx.stroke();
}


function figura(){
    //imagem
    //cria uma variavel de imagem
    var foto = new Image();
    foto.addEventListener('load', function() {
        ctx.drawImage(foto,10,220);
    },false);

    foto.src = 'img/gato.png';
}


function coracao(){
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
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 150, 100, 30);
}


function apaga(){
    //apaga os desenhos
    ctx.clearRect(0,0,500,500);
}










