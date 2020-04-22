
let rad;
let inten;
let x = [];
let y = [];
let seedx = [];
let seedy = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(1);


rad = 150;
inten = 0.25;

for(i=0;i<5;i++){
 seedx[i] = random(0,1000);
 seedy[i] = random(0,1000);
 x[i] = random(100,width-100);
 y[i] = random(100,height-100);
}

}

function draw() {
background(255);
for(i=0;i<5;i++){
seedx[i] += 0.0015;
seedy[i] += 0.002;
for(e=0;e<90;e++){
	let m = 4;
	let samplex = seedx[i]+sin(e*m)*inten;
	let sampley = seedy[i]+cos(e*m)*inten;
	let mr = noise(samplex,sampley)*200;
	let mx = sin(e*m)*mr+(x[i]);
	let my = cos(e*m)*mr+(y[i]);

//  for(i=0;i<180;i++){
//    let r = rad;
//    let x = sin(i*2)*r+mx; 
//    let y = cos(i*2)*r+my;
//    point(x,y);
//  }
ellipse(mx,my,rad);

}
}

}

function keyPressed(){
if(keyCode==SHIFT){
saveCanvas("image","jpg");
}
}