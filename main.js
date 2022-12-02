//collect data from form
//let speed_loop_post = document.querySelector("#speed").value;





  let canvas = document.getElementById("canvas");

  let context = canvas.getContext("2d");  

  var window_height = window.innerHeight;
  var window_width = window.innerWidth;

  var left_beat = new Audio("https://github.com/ulazcano/emdr/raw/main/left_beat.wav");
  var right_beat = new Audio("https://github.com/ulazcano/emdr/raw/main/right_beat.wav");
  var speed_loop = obj.speed;

  canvas.height = window_height;
  canvas.width = window_width;

  canvas.style.background = obj.fondo;
  let clear_canvas = function (){
    context.clearRect(0, 0, window_width, window_height);
  }
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
      //context.strokeStyle = this.color;
      //context.textAlign = "center";
      //context.textBaseline = "middle";
      //context.font = "20px Arial";
      //context.fillText(this.text, this.xpos, this.ypos);
      

      context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
      context.fillStyle
      //context.stroke(); Color contorno
      context.fillStyle = obj.circulo;
      context.fill();

      context.closePath();
    }

    update() {
      clear_canvas();
      //context.clearRect(0, 0, window_width, window_height);
      this.draw(context);

      if (this.xpos + this.radius > window_width) {
        this.dx = -this.dx;
        left_beat.pause();
        left_beat.currentTime = 0;
        right_beat.play();
      }

      if (this.xpos - this.radius < 0) {
        this.dx = -this.dx;
        right_beat.pause();
        right_beat.currentTime = 0;
        left_beat.play();
        // loop_counter++;
      }
      

      this.xpos += this.dx;
      this.ypos += this.dy;
    }
  }

  let my_circle = new Circle(window_width / 2, window_height / 2, 50, "black", 1, obj.speed);


  function updateCircle(){
    
    my_circle.update();
    if(update_switch == true){
      requestAnimationFrame(updateCircle);
    }
    if(update_switch == false){
      cancelAnimationFrame(updateCircle);
  }
  }
