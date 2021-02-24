let n = 150;
let blade = [];


let mx, my;

let offset = 30;

let viewAngle; 
let horizon;
let seperation;




function setup() {
  createCanvas(windowWidth,windowHeight);
	noFill();
	strokeWeight(1);
	stroke(30,100,80);
	//stroke(255);

	horizon = 0;
	seperation = width*0.15;
	viewAngle = height*0.8;

	for(i=0;i<n;i++){
		blade.push(new Grass(random(-width*0.1,width*0.1),viewAngle,random(0.8,random(0.9,1))));
	}

}

function draw() {
	mx = mouseX-width/2;
	my = mouseY-horizon;
	translate(width*0.5,horizon);
	background(50,30,30);
	stroke(30,100,80,250);

	let speed  = map(noise(frameCount*0.00005),0,1,0.005,0.01);

  for(i=0;i<n;i++){
		blade[i].display(speed,seperation,offset);
		blade[i].display(speed,-seperation,-offset);
		if(mouseIsPressed){
			blade[i].collide();
		}
	}
	if(my>horizon){
	noCursor();
	stroke(255,255,255,100);
	let depth = map(my,horizon,viewAngle*0.8,0,1);
	ellipse(mx-seperation-offset*depth,my,60*depth,15*depth);
	ellipse(mx+seperation+offset*depth,my,60*depth,15*depth);
	}else{
	cursor();
	}
}

function Grass(X,Y,Z){
	
	this.z = Z;


	this.x = X*this.z;
	this.y = Y*this.z;


	this.length = 10;
	this.height = 0;
	this.maxHeight = height*0.05;// random(height*0.05,height*0.04)*this.z;
	this.growthRate = random(0.005,0.007);
	this.cutHeight = height*0.005*this.z;

	this.Xsample = X*0.01;
	this.Ysample = Y*0.01;

	




	this.display = (speed,xPos,offSet)=>{
			if(this.height<this.maxHeight){
				this.height+=this.growthRate;
			}

			this.Xsample-=speed;
			this.Ysample-=speed*0.75;
			let force = map(noise(this.Xsample,this.Ysample),0,1,0.001,0.01);

			beginShape();
			for(e=0;e<this.length;e++){
				let sway = e*e*force*this.height*this.z;
				let x = this.x+sway+xPos+(offSet*this.z);
				let y = this.y+sway-(e*this.height); // not currently factoring depth into height to preserve relative shape of top vs. bottom
				vertex(x,y);
			}
			endShape();


	}

	this.collide = ()=>{

		if(this.height>this.cutHeight && mx>this.x-30 && mx<this.x+30 && my>this.y-15 && my<this.y+15){
					this.height = this.cutHeight;
		}
	}
}

