
let n = 10;
let NR = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	stroke(255);
	strokeWeight(3);
	angleMode(DEGREES);
	for(i=0;i<100;i++){
		NR.push(i*5);
	}
}

function draw(){
	background(0)
	for(i=0;i<n;i++){
		for(e=0;e<n;e++){
			design(e*(150),i*(150),i*10+e);
		}
	}
}

function design(x,y,q){
	a = map(mouseX,0,width,0,360)+NR[q];
	push();
	translate(x,y);
	rotate(a);
	ellipse(50,0,20);
	ellipse(-50,0,20);
	pop();
	
}
