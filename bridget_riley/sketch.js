
let dashes = 90;
let spacing;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	length = width/dashes;
	spacing = length*2;
	strokeWeight(2);
}


function draw(){
	background(255);
	for(e=0;e<height+40;e++){
		for(i=0;i<dashes;i++){
			let x1 = i*spacing;
			let y = e+(cos(e/50)*30)-30;
			let x2 = x1+length;
		//	let f = map(noise(e/250),0,1,-500,500);
			let offset = map(sin(sin(sin(e/50))),-1,1,-100,100)-100;
			line(x1+offset,y,x2+offset,y);
		}
	}
	noLoop();
}
