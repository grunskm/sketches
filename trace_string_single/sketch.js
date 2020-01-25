


function setup(){
	createCanvas(windowWidth,windowHeight);
	stroke(255);
	strokeWeight(5);
	angleMode(DEGREES);
}

function mousePressed(){
	background(0)
	gum();
}

function gum(){

	push();
	let circ = floor(random(75,100));
	let a=1; 
	let t = 0.02; //sampling radius affects wiggle intensity
	translate(random(width*0.25,width*0.75),random(height*0.25,height*0.75));
	rotate(random(0,360)); 
	let baseR = 100; 
	let wiggle = 250; //depth of wiggle
	let seed = random(0,10000);
	for(i=0;i<circ;i++){
		let noiseR = noise((i+seed)*t)*wiggle;
		rotate(a);
		let x = baseR+noiseR;
		let y = 0;
		point(x,y);
	}
	pop();
	
}
