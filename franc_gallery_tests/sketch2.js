let dot;

function setup() {
	createCanvas(windowWidth,windowHeight);
	frameRate(5);
	dot = new Dot();
	
	strokeWeight(4);
	stroke(255,255,20);

}


function draw(){
	background(0);
	
	dot.update();
	dot.show();

}

function mousePressed(){


}

function Dot(){
	this.x = random(0,width);
	this.y = random(0,height);
	this.xspeed = 23;
	this.yspeed = 34;
	this.positionX = [];
	this.positionY = [];

	for(e=0;e<25;e++){
		this.positionX.push(this.x);
		this.positionY.push(this.y);
	}

	this.show = function(){
		for(e=0;e<25;e++){
			point(this.positionX[e],this.positionY[e]);
		}
	}

	this.update = function(){

		if(this.x<=0 || this.x>=width){
			this.xspeed *= -1;
		}

		if(this.y<=0 || this.y>=height){
			this.yspeed *= -1;
		}

		this.x += this.xspeed;
		this.y += this.yspeed;


		this.positionX.unshift(this.x);
		this.positionX.pop();

		this.positionY.unshift(this.y);
		this.positionY.pop();

	}


}