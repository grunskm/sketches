
flowers = [];
hues = [10,50,30,200,230,250];


function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	noStroke();
}

function draw(){
// 	background(255);
// 	for(i=0;i<flowers.length;i++){
// 		flowers[i].display();
// 	}
}

function mousePressed(){
	flowers.push(new Flower(mouseX,mouseY));
}


class Flower {
	constructor(X,Y){
		this.x = X;
		this.y = Y;
		this.petals = random(5,40);
		this.droop = random(0,1);
		this.maxHeight = random(50,400);
		this.colour = hues[floor(random(0,hues.length))];

		fill(this.colour+floor(random(-10,10)),150,150);
		for(let i=0;i<20;i++){
			ellipse(this.x+random(-30,30),this.y+random(-30,30),random(10,30));
		}
	}

	grow(){

	}
	display(){
// 		fill(this.colour+floor(random(-10,10)),150,150);
// 		for(i=0;i<20;i++){
// 			ellipse(this.x+random(-30,30),this.y+random(-30,30),random(10,30));
// 		}
	}


}



