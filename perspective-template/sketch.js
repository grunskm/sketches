
let scale = 0.01;


function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	stroke(0);
	strokeWeight(5);
}

function draw(){
	background(255);
	scale = map(mouseX,0,width,0,1);
	translate(width/2,height/2);


	for(i=0;i<10;i++){
		for(e=0;e<10;e++){
			for(o=0;o<20;o+=1){
				let x = i*width/9-width/2;
				let y = e*height/9-height/2;
				let d = 1+(o*scale);
				dPoint(x,y,d);
			}
		}
	}
	//noLoop();
}



function dPoint(X,Y,D){
	//receives X,Y,D in pixels. D is distance from view point. X,Y => W,H

		let s = 1/D;
		let x = X*s;
		let y = Y*s;
		point(x,y);

		return false;
}