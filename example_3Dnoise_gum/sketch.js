let sz,sx,sy,sr;

function setup(){
createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);
strokeWeight(5);
colorMode(RGB);
noFill();
stroke(50,75,100);
sz = random(0,1000);
sr = 0.25;
}

function draw(){
background(255);
gum();
}


function gum(){
sz+=0.0025;
push();
translate(width/2,height/2);
beginShape();
for(i=0;i<181;i++){
let sx = sin(i*2)*sr;
let sy = cos(i*2)*sr;
let r = map(noise(sx+100,sy+100,sz),0,1,10,400);
let x = sin(i*2)*r;
let y = cos(i*2)*r;
vertex(x,y)
}
endShape();
pop();
}