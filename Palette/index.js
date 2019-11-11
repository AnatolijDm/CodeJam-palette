const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const curClr = document.querySelector('#curColor');

var color;

var i = 0;
document.getElementById('choose_color').addEventListener('click', function() {   
    const colColor = document.querySelector('.color_column');                
        if(i === 0) {
            colColor.style.display = 'flex';
            i = 1;
        }
        else if(i === 1) {
            colColor.style.display = 'none';
            i = 0;
        }
})

document.getElementById('green').addEventListener('click', function() {
    color = 'green';
    curClr.style.background = color;
})
document.getElementById('red').addEventListener('click', function() {
    color = 'red';
    curClr.style.background = color;
})
document.getElementById('yellow').addEventListener('click', function() {
    color = 'yellow';
    curClr.style.background = color;
})
document.getElementById('blue').addEventListener('click', function() {
    color = 'blue';
    curClr.style.background = color;
})
document.getElementById('black').addEventListener('click', function() {
    color = 'black';
    curClr.style.background = color;
})
document.getElementById('white').addEventListener('click', function() {
    color = 'white';
    curClr.style.background = color;
})
document.getElementById('orange').addEventListener('click', function() {
    color = 'orange';
    curClr.style.background = color;
})
document.getElementById('gray').addEventListener('click', function() {
    color = 'gray';
    curClr.style.background = color;
})




document.getElementById('pencil').addEventListener('click', function() {
    const pen = document.querySelector('#pencil');
    pen.style.color = 'black';
    pen.style.fontWeight = 'bold';

    canvas.height = 600;
    canvas.width = 670;
    
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    
    function endPosition() {
        painting = false;
        ctx.beginPath();
    }
    
    
    
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineTo(e.pageX - 480, e.pageY - 84);
        ctx.stroke();
        ctx.moveTo(e.pageX - 480, e.pageY - 84);
    }
    
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
})

