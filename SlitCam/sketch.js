

//Personal Sunset//

var canvas;
var capture;
var index = 5;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	capture = createCapture(VIDEO);
	//capture.hide();

//	noStroke();
	//background(100);
}


function draw(){
	image(capture,0,0,width,height);
	for(i=0;i<width;i++){
		let c = get(i,index);
		fill(c);
		point(i,index);
	}
	index++;
	if(index>=height){
		index = 0;
	}
}
