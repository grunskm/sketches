
var painting;
var back;
var n = 1;
var backImg;

function setup(){
	createCanvas(1000,1000);
  backImg = loadImage("blank2.jpg");
  painting = new Painting();
  imageMode(CENTER);
 //  noStroke();
  text("CLICK TO COMPOSE",width*0.5-50,height*0.48);
  text("SPACE TO SAVE",width*0.5-40,height*0.52);
}

function mousePressed(){
  noCursor();
  painting.recompose();
  painting.display();
}

function keyPressed(){
	if(keyCode==32){
		saveCanvas("gum_print"+n,"png");
	}
}

function Painting(){
  this.h = height*0.75;
  this.w = this.h;
  this.x = (width/2)-(this.w/2);
  this.y = (height/2)-(this.h/2);
  this.n;
  this.back = backImg;
  
  this.display = function(){
    background(210);
		let col = { 
			r:random(0,255),
			g:random(0,255),
			b:random(0,255)
		}
    image(this.back,width/2,height/2,this.w*1.365,this.h*1.375);
		// stroke(col.r,col.g,col.b);
		for(t=0;t<this.w;t++){
			for(u=0;u<this.h;u++){
    		stroke(col.r+random(-5,5),col.g+random(-5,5),col.b+random(-5,5));
   		  point(t+this.x,u+this.y);
			}
		}
    for(i=0;i<this.n;i++){
     gum(this.x,this.y,this.w,this.h);
    }
  }
  
  this.recompose = function(){
    this.n = random(3,7);
  }
}

function gum(x,y,w,h){
  push();
  var r = w*0.055; // radius
  var pr = 0.5; // noise sampling radius
  var seed = random(0,10000); // ensures no duplication
  var col = [random(0,200),random(0,200),random(0,200)];
  
  //draw gum
  translate(random(x+(r*2),x+w-(r*2)),random(y+(r*2),y+h-(r*2)));
  fill(col[0],col[1],col[2]);
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