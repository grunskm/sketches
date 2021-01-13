let dot = [];

function setup() {
	createCanvas(windowWidth,windowHeight);

	for(i=0;i<100;i++){
		dot.push(new Dot());
	}
	
	strokeWeight(4);
	stroke(255);

}


function draw(){
	background(0);
	
	for(i=0;i<100;i++){
		dot[i].update();
		dot[i].show();
	}

}

function mousePressed(){


}

function Dot(){
	this.x = random(0,width);
	this.y = random(0,height);
	this.xSpeed = random(1,2);
	this.ySpeed = 0;

	this.show = function(){
		line(this.x,this.y,this.x+40,this.y);
	}

	this.update = function(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x<=0 || this.x >= width){
			this.xSpeed*=-1;
		}
		if(this.y<=0 || this.y>=height){
			this.ySpeed*=-1;
		}
	}
}
