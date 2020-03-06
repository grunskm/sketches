let seedx, seedy,rad,rows,cols;
	let seed;

function setup() {
	createCanvas(800,800);
	angleMode(DEGREES);
	noFill();
	stroke(0);
	strokeWeight(1);
	row = 300;
	r = 700;
	happen();
}


function mousePressed(){
	happen();
}

function happen(){
	seed = random(0,1000);
	background(255);
	for(i=0;i<row*4;i++){
			//cir(i-row*0.5,-100);
			//cir(i-row*0.5,100);
			cir(i-row*1,400);
			//cir(i-row*0.5,500);
		//	cir(i-row*0.5,700);
			//cir(i-row*0.5,900);
	}
}

function cir(x,y){
	let n = map(noise(x*0.002+seed),0,1,-500,500);
	let xOff = x*width/row;
	let yOff = y+n;
	//point(xOff,yOff);
	for(k=0;k<1080;k++){
	let xx = (sin(k/3)*r)+xOff;
	let yy = (cos(k/3)*r)+yOff;
	point(xx,yy);
 }
}


function keyPressed(){
	if(keyCode==SHIFT){
		saveCanvas("image","jpg");
	}
}