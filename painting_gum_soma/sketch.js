/////////////////// ideas coming from SOMA show
var painting;
var back;
var n = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  painting = new Painting();
  imageMode(CENTER);
  noStroke();
}

function mousePressed(){
  painting.recompose();
  painting.display();
}

function keyPressed(){
	if(keyCode==SHIFT){
	saveCanvas("ven_diagram"+n,"png");
	}
}

function Painting(){
  this.h = height*0.75;
  this.w = this.h;
  this.x = (width/2)-(this.w/2);
  this.y = (height/2)-(this.h/2);
  this.n;
  this.back = loadImage("blank2.png");

  
  this.display = function(){
    background(210);
    image(this.back,width/2,height/2,this.w*1.365,this.h*1.375);
    fill(random(0,200),random(0,200),random(0,200));
    rect(this.x,this.y,this.w,this.h);
    for(i=0;i<this.n;i++){
     gum(this.x,this.y,this.w,this.h);
    }
  }
  
  this.recompose = function(){
    this.n = 4;
  }
}


function gum(x,y,w,h){
  this.buff = 1.5;
  push();
  var r = w*0.15; // radius
  var pr = 0.5; // noise sampling radius
  var seed = random(0,10000); // ensures no duplication
  var col = [random(0,200),random(0,200),random(0,200)];
  
  //draw gum
  translate(random(x+(r*this.buff),x+w-(r*this.buff)),random(y+(r*this.buff),y+h-(r*this.buff)));
  fill(col[0],col[1],col[2],170);
  beginShape();
  for(a=0;a<TWO_PI;a+=0.1){
      var px = sin(a)*pr+seed; // circle pattern for noise sampling
      var py = cos(a)*pr+seed;
      
      var wiggle = map(noise(px,py),0,1,0,r); // get noise value
      
	  var sx = sin(a)*(r+wiggle);
	  var sy = cos(a)*(r+wiggle);
	  
      vertex(sx,sy);
  }
  endShape();
  pop();
}

