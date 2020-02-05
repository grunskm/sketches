let rad = 90;


function setup() {
  createCanvas(4000, 4000);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(15);
	background(255);
}

function mousePressed() {
let seedx = 50;
let seedy = random(0,1000);
let inten = 0.25;
for(e=0;e<90;e++){
	let samplex = seedx+sin(e*4)*inten;
	let sampley = seedy+cos(e*4)*inten;
	let mr = noise(samplex,sampley)*1000;
	let mx = sin(e*4)*mr+2000;
	let my = cos(e*4)*mr+2000;
	ellipse(mx,my,1000);
//  for(i=0;i<360;i++){
//    let r = 750;
//    let x = sin(i)*r+mx; 
//    let y = cos(i)*r+my;
//    point(x,y);
//  }

}

}

function keyPressed(){
if(keyCode==SHIFT){
saveCanvas("image","jpg");
}
}