let seedx;
let seedy;
let rad;
let rad2;
let inten;


function setup() {
  createCanvas(850,850);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(1);

seedx = random(0,1000);
seedy = random(0,1000);
inten = 0.25;

}

function mousePressed() {
// background(255);
// for(a=0;a<9;a++){
// //stroke(random(0,255),100,100);
// rad = 200;random(200,300);
// rad2 = 500;//random(200,300);
// buttHole(random(500,1500),random(500,1500));
// }
// for(q=0;q<3;q++){
// for(w=0;w<3;w++){
// buttHole((q+1)*width/4,(w+1)*height/4);
// }
// }

}

function keyPressed(){
if(keyCode==OPTION){
saveCanvas("image","jpg");
}else if(keyCode==CONTROL){
print("butthole");
background(255);
for(a=0;a<1;a++){
//stroke(random(0,255),100,100);
rad = 200;//random(200,300);
rad2 = 200;//random(200,300);
let off = 100;
buttHole(width/2,height/2);
//buttHole(random(off,width-off),random(off,height-off));
}
}
}

function buttHole(x,y){
	seedx = random(0,10000);
	seedy = random(0,1000);
for(e=0;e<360;e++){
	let m = 1;
	let samplex = seedx+sin(e*m)*inten;
	let sampley = seedy+cos(e*m)*inten;
	let mr = noise(samplex,sampley)*rad2+50;
	let mx = sin(e*m)*mr+(x);
	let my = cos(e*m)*mr+(y);

	cir(mx,my);
// ellipse(mx,my,rad);

}
}

function cir(mx,my){
 for(i=0;i<720;i++){
   let r = rad;
   let xx = sin(i/2)*r+mx; 
   let yy = cos(i/2)*r+my;
   point(xx,yy);
 }
}