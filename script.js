const canvas = document.getElementById("canvas1"); 
const ctx = canvas.getContext("2d"); 
let mouseEvent = "empty";
let lastX, lastY;
let color = "black";
let lneWidth = 1;
canvas.addEventListener("mousedown", (clicker) => {
    mouseEvent = "MouseDown";
});
canvas.addEventListener("mousemove", (clicker) => {
    let currentX = clicker.clientX - canvas.offsetLeft;
    let currentY = clicker.clientY - canvas.offsetTop;
    switch (mouseEvent) {
        case "MouseDown" :
            console.log(`Current X is ${currentX}, Y is ${currentY}`);
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = lneWidth;
            ctx.arc(currentX, currentY, 10, 0, 2 * Math.PI);
            ctx.stroke();
        break;
    }
});
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
function clearA() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function up() {
    window.alert("You could do it once also 😡");
}