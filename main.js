var mousevent = "";
var currentPositionX, currentPositionY, lastPositionX, lastPositionY;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var widthLine = 1;

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mousevent = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mousevent = "mouseleave";
}
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mousevent = "mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentPositionX = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;
    if (mousevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(currentPositionX, currentPositionY);
        ctx.stroke();
        console.log("last Position of X = " + lastPositionX);
        console.log("last Position of Y = " + lastPositionY);
        console.log("Current Position of X = "+currentPositionX);
        console.log("Current Position  of X = " + currentPositionX);
        
    }
    lastPositionX = currentPositionX;
    lastPositionY = currentPositionY;
}

function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}