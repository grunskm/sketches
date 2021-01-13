let div = 5;
let size;
let grid = [];

let capture;

on = false;

function setup() {
	createCanvas(500,500);
	capture = createCapture(VIDEO);
	capture.hide();
	frameRate(30);
	noStroke();
	
	size = width/div;
	
	for(i=0;i<div;i++){
		for(e=0;e<div;e++){
			grid.push(new miniGrid(i,e));
		}
	}
}

function draw(){
	background(0);
	image(capture,0,0);
	for(i=0;i<grid.length;i++){
		grid[i].show();
	}
	
// 	if(on == true ){
// 		for(i=0;i<grid.length;i++){
// 			grid[i].hit();
// 		}
// 	}
}

function mousePressed(){
		for(i=0;i<grid.length;i++){
			grid[i].hit();
		}
// 	if(on == false){
// 		on = true;
// 	}else{
// 		on = false;
// 	}
}

function miniGrid(I,E){
	this.x = I*size;
	this.y = E*size;
	this.div = floor(random(2,10));
	this.s = size/this.div;
	
	this.show = function(){
	
		for(q=0; q<this.div; q++){
			for( w=0;w<this.div;w++){
				let x = this.x+(q*this.s);
				let y = this.y+(w*this.s);
				let c = get(x,y);
				fill(c);
				rect(x,y,this.s,this.s);
			}
		}
	}
	
	this.hit = function(){
		if(mouseX>this.x && mouseX<this.x+size && mouseY>this.y && mouseY<this.y+size){
			
			this.div = floor(random(1,5));
			this.s = size/this.div;
					
		}
	}
}


