let w,h;
let size = 10;
let block = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
	noStroke();

	w = floor(width/size)+1;
	h = floor(height/size)+1;


	for(i=0;i<w;i++){
		for(e=0;e<h;e++){
			block.push(new Block());
		}
	}
}

function draw(){
	background(100);
	for(i=0;i<w;i++){
		for(e=0;e<h;e++){
			block[(i*e)+e].display(i,e);
		}
	}
}

function Block(){

	this.clear = random(0,2);

	this.display = function(X,Y){

		if(this.clear<1.2){
			fill(0);
		}else{noFill();}

		rect(X*size,Y*size,size,size);
	}	
}