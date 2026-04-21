let bubbles = [];

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = [255, 255, 255];     
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(this.color[0], this.color[1], this.color[2]); 
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }
}

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(400), random(400), random(20, 50)));
  }
}

function draw() {
  background(0);
 
  for(let b of bubbles) {
    b.move();
    
    let overlapping = false;
    for(let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
        break;
      }
    }
    
    if (overlapping) {
      b.color = [200, 0, 100];
    } else {
      b.color = [255, 255, 255];
    }
    
    b.show();
  }
}
