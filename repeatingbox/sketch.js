
let f = 0;

function setup() {
	createCanvas(400,400);
	strokeWeight(30);
	background(100);
}


function draw(){
		
		stroke(f);

		if(mouseIsPressed){
			point(mouseX,mouseY);

			point(mouseX-width,mouseY);
			point(mouseX,mouseY-height);

			point(mouseX+width,mouseY);
			point(mouseX,mouseY+height);

			point(mouseX-width,mouseY+height);
			point(mouseX+width,mouseY-height);

			point(mouseX+width,mouseY+height);
			point(mouseX-width,mouseY-height);
		}
}

function keyPressed(){
	if(keyCode===RETURN){
		saveCanvas("image","png");
	}
	if(keyCode===SHIFT){
		if(f === 0){
			f = 50;
		}else{f=0;}
	}
}
