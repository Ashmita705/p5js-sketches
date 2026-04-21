function setup() {
  createCanvas(400, 400);
  man = new man()
}

function draw() {
  let insideHouse = man.x>280 && man.x< 390
  if (insideHouse){
    background(0);
  }
  else{
    background(135,206,250);
  }
  if (!insideHouse) {
    // 3 fluffy white clouds
    fill(255);
    noStroke();
    ellipse(80, 80, 40, 30);
    ellipse(100, 70, 50, 35);
    ellipse(120, 85, 45, 30);
    
    ellipse(250, 60, 35, 25);
    ellipse(270, 55, 45, 30);
    ellipse(290, 65, 40, 28);
  } else {
    // 20 twinkling stars
    fill(255, 255, 200);
    noStroke();
    for(let i = 0; i < 5; i++) {
      ellipse(random(400), random(100), 5, 5);
    }
  }
  fill(160,82,45);
  triangle(330, 60,280, 200,390, 200);//roof
  fill(225, 250, 150);
  rect(280,199,110,150);//body of the house
  fill(0);
  rect(310,274,55,75);//door
  man.show();
  man.move();
}

class man{
  constructor(){
    this.x=200;
    this.y=300;
  }
 show(){
   stroke(2)
    fill(255,190,150);
  ellipse(this.x,this.y, 20, 25);
   fill(100,0,255);
   rect(this.x-8,this.y+7,16,30);
   stroke(0)
   strokeWeight(2)
    noFill();
   line(this.x-8, this.y+7, this.x-15, this.y+30);
   line(this.x+8, this.y+7,this.x+15,this.y+30)
 }

 move(){
  this.x= mouseX;
  this.y=300;
  }
}
