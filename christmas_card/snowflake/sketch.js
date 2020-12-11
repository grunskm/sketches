//

let red,green,yellow;

let tx=0;
let ty=0;


function setup(){
	createCanvas(2800,2000);
	noSmooth();
	stroke(255);
	strokeWeight(1);
	background(255);
	angleMode(DEGREES);
	fill(0);
	rect(50,50,width-100,height-100);

	red = "rgb(255,23,65)";
	green = "rgb(12,230,100)";
	yellow = "rgb(200,200,34)";
	colours = [red,green,yellow];
}

function draw(){

	if(mouseIsPressed){
		for(i=0;i<6;i++){
			push();
			translate(tx,ty);
			rotate(60*i);
			point(mouseX-tx,mouseY-ty);
			rotate(30);
			point((mouseX-tx)/2,(mouseY-ty)/2);

			pop();
		}
	}
}

function mousePressed(){
	tx = mouseX;
	ty = mouseY;

}




function keyPressed(){
	if(keyCode===ENTER){
		saveCanvas("flurries","png");
	}
	// if(keyCode===TAB){
	// 	 	tx = mouseX;
	// 	 	ty = mouseY;
	// }

}
