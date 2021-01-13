

//Personal Sunset//

var canvas;
var capture;
var index = 0;
var col = [20,5,10,40,40,50];
var row = [20,30,10,40,10,5];

var reflectionNumber = 400;
var reflection = [];


function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
  	capture = createCapture(VIDEO);
 	capture.hide();
	noStroke();
}


function draw(){
	background(255);
    image(capture, 0, 0, width,height);

	for(i=0;i<col[index];i++){
		for(e=0;e<row[index];e++){
 			let f = get(i*width/col[index]+width/col[index]/2,e*height/row[index]+height/row[index]/2);
			fill(f);
			rect(i*width/col[index],e*height/row[index],width/col[index],height/row[index]+1);
		}
	}
}

function keyPressed(){
	index++;
	if(index>=col.length){
		index = 0;
	}
}


