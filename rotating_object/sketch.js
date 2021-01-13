let point = [];
let r = 1;
let n = 10;


function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	strokeWeight(2);

	for(i=0;i<n;i++){
		point.push(createVector(random(-width/2,width/2),random(-height/2,height/2),random(0,1)));
	}
	noFill();
}


function draw(){
	background(255);
	translate(width/2,height/2);
	rx = sin(frameCount/50);

	beginShape();
	for(i=0;i<point.length;i++){
		rz = cos(i);
		let x = point[i].x*(point[i].z*rx);
		let y = point[i].y*point[i].z*rz;
		vertex(x,y);
	}
	endShape();
}
