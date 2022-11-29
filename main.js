let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

var left_beat = new Audio("/left_beat.wav");
var right_beat = new Audio("/right_beat.wav");
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = "#ff8";

// let loop_counter = 0;
class Circle {
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 0 * this.speed;
  }
  draw(context) {
    context.beginPath();
    /*    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);
    context.lineWidth = 10;*/

    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.fillStyle = "purple";
    context.fill();

    context.closePath();
  }

  update() {
    context.clearRect(0, 0, window_width, window_height);
    this.draw(context);

    if (this.xpos + this.radius > window_width) {
      this.dx = -this.dx;
      right_beat.play();
    }
    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
      left_beat.play();
      // loop_counter++;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let circle_counter = 1;

let my_circle = new Circle(
  window_width / 2,
  window_height / 2,
  50,
  "black",
  circle_counter,
  20
);

my_circle.draw(context);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  my_circle.update();
};

updateCircle();

/*
for( var numbers = 0; numbers < 1; numbers++ ) {
  


  let my_circle = new Circle(random_x,random_y,50,"black",circle_counter,1);
  all_circles.push(my_circle);
  createCircle(my_circle);
}


 
*/
