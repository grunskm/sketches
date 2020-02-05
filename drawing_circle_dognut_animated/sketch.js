let seedx;
let seedy;
let rad;
let inten;


function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(1);

seedx = random(0,1000);
seedy = random(0,1000);
rad = 150;
inten = 0.25;

}

function draw() {
background(255);
seedx += 0.0015;
seedy += 0.002;
for(e=0;e<90;e++){
	let m = 4;
	let samplex = seedx+sin(e*m)*inten;
	let sampley = seedy+cos(e*m)*inten;
	let mr = noise(samplex,sampley)*200;
	let mx = sin(e*m)*mr+(width/2);
	let my = cos(e*m)*mr+(height/2);

//  for(i=0;i<180;i++){
//    let r = rad;
//    let x = sin(i*2)*r+mx; 
//    let y = cos(i*2)*r+my;
//    point(x,y);
//  }
ellipse(mx,my,rad);

}

}

function keyPressed(){
if(keyCode==SHIFT){
saveCanvas("image","jpg");
}
}