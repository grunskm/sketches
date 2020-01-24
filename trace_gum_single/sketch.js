


function setup(){
	createCanvas(windowWidth,windowHeight);
	stroke(255);
	strokeWeight(3);
	angleMode(DEGREES);
}

function mousePressed(){
	background(0)
	gum();
}

function gum(){
	let seedX = random(-1000,1000);
	let seedY = random(-1000,1000);
	push();
	let a=1;
	let t = 0.5; //sampling radius affects wiggle intensity
	translate(random(width*0.25,width*0.75),random(height*0.25,height*0.75));
	let baseR = 50;
	let wiggle = 50;
	for(i=0;i<360;i++){
		let noiseR = noise(t*sin(i)+seedX,t*cos(i)+seedY)*wiggle;
		rotate(a);
		let x = baseR+noiseR;
		let y = 0;
		point(x,y);
	}
	pop();
	
}
