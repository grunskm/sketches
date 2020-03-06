
var worm = [];
var n = 50;
var rot = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  strokeWeight(3);
  noFill();
  stroke(0);

  for(q=0;q<n;q++){
  worm.push(new Worm());
  }
}

function draw() {
  background(255);
  translate(width/2,height/2);
  rot+=0.3;
  rotate(rot);
  for(q=0;q<n;q++){
  worm[q].squiggle();
  }
}

function Worm(x,y,w,h){
  this.r = random(30,120); // radius
  this.pr = 0.5; // noise sampling radius
  this.seed = random(0,10000); // ensures no duplication
  this.ang = random(0,10000);
  this.len = random(20,30);
  this.speed = random(0.3,0.7);
  this.px;
  this.py;
  this.sx;
  this.sy;
  this.circle = function(){
    ellipse(mouseX,mouseY,30);
  }
  //draw worm
  this.squiggle=function(){
    this.a = this.ang;
    push();
    beginShape();
    for(i=0;i<this.len;i+=1){
    this.a+=1;
    this.px = sin(this.a)*this.pr+this.seed; // circle pattern for noise sampling
    this.py = cos(this.a)*this.pr+this.seed;
    this.wiggle = map(noise(this.px,this.py),0,1,0,this.r*3); // get noise value
	  this.sx = sin(this.a)*(this.r+this.wiggle); //draw wiggle line
	  this.sy = cos(this.a)*(this.r+this.wiggle);
    vertex(this.sx,this.sy);
    }
    endShape();
    pop();
    this.ang+= this.speed;
  }
}