
let n = 40;

function setup(){
	createCanvas(windowWidth,windowHeight);
	strokeWeight(1);
	stroke(255);
	noFill();
}

function draw(){
	background(0);
	for(i=0;i<n;i++){
		let space = height/n+2;
		let y = i*space-space;
		let k = frameCount%space;
		//line(0,y+k,width,y+k);
		//beginShape();
		for(e=0;e<50;e++){
			let x = e*width/49;
			let no = noise(x/100+100,y/100+k/100,frameCount/50)*20;
			strokeWeight(no);
			point(x,y+k);
		}
	//	endShape();
	}
}

