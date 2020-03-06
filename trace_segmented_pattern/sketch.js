

let n = 10;
function setup(){
	createCanvas(1100,850);
	background(255);
	stroke(0);
	strokeWeight(1);
	
}

function draw(){
	if(mouseIsPressed){
	for(i=0;i<n;i++){
	for(e=0;e<n;e++){
		let x = mouseX+(i*2*width/n)-width;
		let y = mouseY+(e*2*height/n)-height;
		point(x,y)
	}
	}
	}
}

