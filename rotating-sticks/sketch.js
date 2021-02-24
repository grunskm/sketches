
let n = 10;
let scale = 0.001;
let weight = 5;
let w;

let frame;


function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	w = width*0.1;
	seperation = width*0.2;

	frame = new Frame(n);
	
}

function draw(){

	background(100);

	frame.display(-seperation,-10);
	frame.display(seperation,10);

}

function Frame(N){

	this.beam = [];
	this.n = N;

	for(b=0;b<this.n;b++){
		this.beam.push(new Beam());
	}

	this.display = (POS,OFF)=>{
		push();
		translate(width/2+POS,height/2);
		for(b=0;b<this.n;b++){
			this.beam[b].display(OFF);
		}
		pop();
	}

	this.reconfigure = ()=>{
		for(b=0;b<this.n;b++){
			this.beam[b]=new Beam();
		}
	}

	function Beam(){
		this.r = random(0,360);
		this.rate = random(0,10);
		this.x1 = random(-w,w);
		this.y1 = random(-w, w);
		this.d1 = random(0,20);

		this.x2 = random(-w,w);
		this.y2 = random(-w, w);
		this.d2 = random(0,20);

		this.display = (OFF)=>{
			let inc = frameCount/this.rate%360+this.r;
			let d1 = this.d1 + sin(inc)*w;
			let d2 = this.d1 + sin(inc-180)*w;
			let x1 = this.x1 + cos(inc)*w;
			let x2 = this.x1 + cos(inc-180)*w;
			dLine(x1,this.y1,d1,x2,this.y2,d2,20,OFF);

		}

	}

}



function dRect(X,Y,W,H,D){

	let s = 1/(1+(D*scale));
	let x = X*s+POS;
	let y = Y*s;
	let w = W*s;
	let h = H*s;
	rect(x,y,w,h);
}

function dPoint(X,Y,D){
	//receives X,Y,D in pixels. D is distance from view point in 'pixels'. X,Y => W,H

	let s = 1/(1+(D*scale));

	strokeWeight(s*weight);
	let x = X*s;
	let y = Y*s;
	point(x+POS,y);
}

function dImage(X,Y,D,IMG){

	let s = 1/(1+(D*scale));

	let x = X*s;
	let y = Y*s;
	image(IMG,x+POS,y,IMG.width*s,IMG.width*s);

}

function dLine(X1,Y1,D1,X2,Y2,D2,DIV,OFF){

	let xSpace = (X2-X1)/DIV;
	let ySpace = (Y2-Y1)/DIV;
	let dSpace = (D2-D1)/DIV;

	for(i=0;i<DIV;i++){
		let s = 1/(1+((D1+dSpace*i)*scale));

		let x1 = X1+xSpace*i*s;
		let y1 = Y1+ySpace*i*s;
		let o1 = OFF*s;
				//point(x1,y1);
				s = 1/(1+((D1+dSpace*(i+1))*scale));
		let x2 = X1+xSpace*(i+1)*s;
		let y2 = Y1+ySpace*(i+1)*s;
		let o2 = OFF*s;
				//point(x2,y2);

		strokeWeight(weight*s);
		stroke(255*s);
	
		line(x1+o1,y1,x2+o2,y2);
	} 

}
