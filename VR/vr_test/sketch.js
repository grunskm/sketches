let frame;


function setup(){
	createCanvas(1080,500);
	frame = new img(450,450,0,20);

}

function draw(){
	background(100);
	frame.display(60);
	frame.display(560);
}


function img(W,H,X,Y){
	this.ball = [];
	this.x = X;
	this.y = Y;
	this.w = W;
	this.h = H;

	for(i=0;i<30;i++){
		this.ball.push(new Ball(random(X+20,X+W-20),random(Y+20,Y+H-20),map(i,0,30,0.25,1)));
	}

	this.display = function(X){
		fill(255);
		rect(X,this.y,this.w,this.h);
		fill(0);
		noStroke();
		for(i=0;i<30;i++){
			this.ball[i].display(X);
		}
	}

	function Ball(X,Y,D){
		this.depth = D;
		this.x = X;
		this.y = Y;
		this.s = 30*this.depth;
		
		this.display = function(x){
			this.off = map(x,0,width,-50,50)*this.depth; 
			ellipse(this.x+x+this.off,this.y,this.s);
		}
	}
}



