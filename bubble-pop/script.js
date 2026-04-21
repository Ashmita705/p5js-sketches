let kitten = [];  

let bubbles = [];  

function preload() {
  kitten = loadImage('for p5js-1.jpg');  
}

function setup() {
  createCanvas(400, 400);
  bubbles.push(new Bubble(random(width), random(height), random(20, 150)));  
}

function draw() {
  background(0); 
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

function mousePressed() {
  for(let i = bubbles.length - 1; i >= 0; i--) {
    let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
    if(d < bubbles[i].r) {
      bubbles.splice(i, 1);
      return;
    }
  }
  
  bubbles.push(new Bubble(mouseX, mouseY, random(20, 50)));
}

class Bubble {
  constructor(x, y, r,) {  
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    image(kitten, this.x, this.y, this.r * 2, this.r * 2);  
  }
}

