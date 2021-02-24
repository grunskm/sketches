let n = 20;

let painting;

let offset;
let seperation;
let size;


function setup() {
  createCanvas(windowWidth,windowHeight);

	//noStroke();
	stroke(255);
	size = 30;
	offset = 30;
	seperation = width*0.2;

	painting = new Painting(width*0.4,width*0.4,n);

// 	background(0);
// 	painting.display( seperation,offset);
// 	painting.display(-seperation,-offset);

}

function draw(){
	let off = 30;//map(sin(frameCount/50),-1,1,0,offset);
	background(0);
	painting.display( seperation,off);
	painting.display(-seperation,-off);

}


function Painting(W,H,N){
	this.w = W;
	this.h = H;

	this.gum = [];

	for(i=0;i<n;i++){
			let depth = map(i,0,n,0.4,0.9);
			let x = random(-this.w/2+offset,this.w/2-offset);
			let y = random(-this.h/2+size/2,this.h/2-size/2);
			this.gum.push( new SpaceGum(x,y,depth));
	}

	this.display = function(SEP,OFF){
		
		push();
		translate(width/2+SEP,height/2);
		fill(20);
 		rect(-this.w/2+OFF,-this.h/2,this.w,this.h);
	  for(i=0;i<n;i++){
			this.gum[i].display(OFF);
		}
		pop();
	}
}

function SpaceGum(X,Y,Z){
	this.z = Z;
	this.x = X;
	this.y = Y;
	this.s = size*this.z;
	this.f = map(this.z,0,1,30,200);

	this.display = function(OFF){
		//fill(this.f);
		noFill();
		ellipse(this.x+(OFF*this.z),this.y,size,size);//this.s,this.s);
	}
}
