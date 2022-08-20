const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth = 1600;
canvas.height = 600;

let context = canvas.getContext("2d");
let startbg = "white";
context.fillStyle = startbg;
context.fillRect(0,0, canvas.width, canvas.height);


let drawColor = "black";
let drawWidth = "2";
let isDrawing = false;

let restore_array = [];
let index = -1;

function change_color(element) {
    drawColor = element.style.background;
}


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);


function start(event) {
   isDrawing = true;
   context.beginPath();
   context.moveTo(event.clientX - canvas.offsetLeft,
                  event.clientY - canvas.offsetTop);
   event.preventDefault();

}

function draw(event) {
   if(isDrawing) {
      context.lineTo(event.clientX - canvas.offsetLeft,
                     event.clientY - canvas.offsetTop);
      context.strokeStyle = drawColor;
      context.lineWidth = drawWidth;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();

   }
   event.preventDefault();
}

function stop(event) {
        if(isDrawing){
         context.stroke();
         context.closePath();
         isDrawing = false;
        }

   event.preventDefault();

   if(event.type != 'mouseout') {
      restore_array.push(context.getImageData(0,0, canvas.width, canvas.height));
      index +=1;
   }

   
   
}

function clear_canvas() {
   context.fillStyle=startbg;
   context.clearRect(0,0, canvas.width, canvas.height);
   context.fillRect(0,0, canvas.width, canvas.height);
   
   restore_array = [];
   index = -1;
}

function undo_canvas(){
   if(index <= 0){
      clear_canvas();
   }else {
      index -=1;
      restore_array.pop();
      context.putImageData(restore_array[index], 0, 0);
   }
}