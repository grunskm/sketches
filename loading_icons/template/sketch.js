//

let q = 0;
function setup(){
	createCanvas(400,400);
	background(100);
	strokeWeight(2);
	noFill();
	angleMode(DEGREES);
}

function draw(){
	background(100);
	translate(width/2,height/2);
	q+=1;
	for(e=0;e<10;e++){
		beginShape();
		for(i=0;i<70;i++){
			let r = e*10;
			let x = sin(i+e*q)*r;
			let y = cos(i+e*q)*r;
			vertex(x,y);
		}
		endShape();
	}
}
