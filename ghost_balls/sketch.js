
let img;
let q = 0.8;
let s = 15;
let adjust = false;
let offSet = 0;
let yOff = [];
let xOff = [];
let x = [];
let y = [];
let c;

function setup(){
	createCanvas(452,600);
	ellipseMode(CENTER);
	img = loadImage("img.jpg");
	background(255);
	for(e=0;e<4;e++){
	for(i=0;i<4;i++){
	xOff[i*4+e] = random(-20,20);
	yOff[i*4+e] = random(-20,20);
	x[i*4+e] = random(width*0.2,width*0.8);
	y[i*4+e] = random(height*0.2,height*0.8);
	}
	}
}

function draw(){
	image(img,0,0);
	for(e=0;e<4;e++){
	for(i=0;i<4;i++){
// 		let x = e*width*0.165+width*0.25+xOff[i*4+e];
// 		let y = i*height*0.1+height*0.2+yOff[i*4+e];
		
		if(adjust==true){
			offSet = map(mouseX,0,width,-10,10);
		}
		noStroke();
		fill(106,96,89);
		ellipse(x[i*4+e],y[i*4+e],s);
		fill(197,193,190);
		ellipse(x[i*4+e]+offSet,y[i*4+e]+s/4,s);
		c = img.get(x[i*4+e],y[i*4+e]);
		stroke(c);
		strokeWeight(s/2);
		noFill();
		ellipse(x[i*4+e],y[i*4+e],s*1.5);
		
	}
	}
}

function mousePressed(){
	if(adjust==true){
		adjust=false;
	}else{adjust=true;}
}

function keyPressed(){
	for(e=0;e<4;e++){
	for(i=0;i<4;i++){
// 	xOff[i*4+e] = random(-5,5);
// 	yOff[i*4+e] = random(-5,5);
	x[i*4+e] = random(width*0.2,width*0.8);
	y[i*4+e] = random(height*0.2,height*0.8);

	}
	}
}


//dark - (106,96,89)
// light - (193,193,190)