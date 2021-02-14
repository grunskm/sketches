

//Personal Sunset//

var canvas;
var capture;

var reflectionNumber = 400;
var reflection = [];


function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
 	capture.hide();
	noStroke();

	for(i=0;i<reflectionNumber;i++){
		reflection[i] = new Reflection(i);
	}
}

function draw(){
	background(255);
  image(capture, 0, 0, width,height);
	let f = get(width/4,50);
	fill(f);
	rect(0,height*0.5,width,height*0.5);

	for(i=0;i<reflectionNumber;i++){
		reflection[i].display();
		reflection[i].update();
	}

}

function Reflection(I){
	this.x = random(0,width);
	this.z = map(tan(map(I,0,reflectionNumber,0,1.5)),0,14,0,1);
	this.y = height*0.75*this.z+height*0.5;
	this.sampleY = map(this.y,height*0.5,height,height*0.5,0);

	this.s = 1;
	this.max = 50*this.z*2;
	this.inc = random(4,15)*this.z;

	this.display = function(){

		let c = get(this.x,this.sampleY);
		fill(c);
		ellipse(this.x,this.y,this.s*4,this.s*0.5);
	}

	this.update = function(){
		this.s += this.inc;
		if(this.s>this.max && this.inc>0){
			this.inc *= -1;
		}else if(this.s<0 && this.inc<0){
			this.x = random(0,width);
			this.inc *= -1;
		}
	}
}

