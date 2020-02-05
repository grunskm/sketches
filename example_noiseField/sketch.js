

let z;

function setup(){
createCanvas(windowWidth,windowHeight);
strokeWeight(20);
colorMode(HSB);

z = random(0,1000);
}

function draw(){
//background(255);
gum();
}


function gum(){
z+= 0.01;
push();
 for(w=0;w<width/20;w++){
	for(h=0;h<height/20;h++){
		f = map(noise(w/10,h/10,z),0.20,0.80,0,255);
		stroke(f,255,255);
		rect(w*20,h*20,20,20);
	}
 }
pop();
}