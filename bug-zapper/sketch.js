

/// flys are jumping when they are caught. It appears like the depth is being rendered differently after being caught. Not lying flat on flycatcher plane.


let num = 15;
let fly = [];
let zapper;
let cursor0;
let seperation;

let scale = 0.06;
let weight = 10;

let w;

function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	cursor0 = loadImage("cursor0.png");

	noCursor();

	w = width*0.8;
	seperation = width*0.2;

	for(i=0;i<num;i++){
		fly.push(new Fly());
	}
	zapper = new FlyTrap();
}

function draw(){
	background(210,150,30);

	translate(width/2,height/2);

	zapper.display(-seperation,-10);
	zapper.display(seperation,10);

	for(i=0;i<num;i++){
		fly[i].collide();
		fly[i].display(-seperation,-10);
		fly[i].display(seperation,10);
	}
}

function mousePressed(){
	zapper.placeZapper();
}

function keyPressed(){
		for(i=0;i<num;i++){
		fly[i].zapped = true;
	}
}

function FlyTrap(){
	this.x;
	this.y;
	this.d = 15;

	this.zapper = 0;

	this.tx;
	this.ty;
	this.td = this.d;
	this.tw;
	this.th;

	
	this.display = (POS,OFF)=>{
		push();
		fill(255,50);
		noStroke();

		this.x = map(mouseX,0,width,-w,w);
		this.y = map(mouseY,0,height,-w,w);

		dImage(this.x+OFF, this.y,this.d,POS,cursor0);
		
		if(this.zapper==0){
			dPoint(this.tx+OFF,this.ty,this.td,POS);
		}else if(this.zapper==1){
			this.tw = this.x-this.tx;
			this.th = this.y-this.ty;
			dRect(this.tx+OFF,this.ty,this.tw,this.th,this.td,POS);
		}else if(this.zapper == 2){
			dRect(this.tx+OFF,this.ty,this.tw,this.th,this.td,POS);
		}
		pop();
	}

	this.placeZapper = ()=>{
		if(this.zapper==0){
			this.tx = this.x;
			this.ty = this.y;

			this.zapper = 1;
		}else if(this.zapper == 1){
			this.zapper = 2;
		}else if(this.zapper == 2){
			this.zapper = 0;
			this.tx = undefined;
			this.ty = undefined;
			this.tw = undefined;
			this.th = undefined;
			for(i=0;i<num;i++){
				fly[i].zapped = false;
			}
		
		}
	}
}




function Fly(){
	this.xseed = random(0,1000);
	this.yseed = random(0,1000);
	this.dseed = random(0,1000);
	this.wiggle = 0;
	this.x;
	this.y;
	this.d;

	this.inc = 0;

	this.zapped = false;

	this.display = function(POS,OFF){
		if(this.zapped==false){
			this.inc += 0.003;
		}else if(this.zapped==true){
			this.inc += 0;
			this.wiggle = noise(this.xseed+frameCount*0.1)*5;
		}

		let offset = OFF;
		this.x = noise(this.inc+this.xseed)*w-(w/2)+offset+this.wiggle;
		this.y = noise(this.inc+this.yseed)*w-(w/2)+this.wiggle;
		this.d = noise(this.inc+this.dseed)*25+this.wiggle;

		dPoint(this.x,this.y,this.d,POS);
	}

	this.collide = ()=>{

		if(
		zapper.zapper == 2 &&
		this.d < zapper.td && 
		this.d > zapper.td-0.1 &&
		this.x > zapper.tx && 
		this.x < zapper.tx + zapper.tw && 
		this.y > zapper.ty && 
		this.y < zapper.ty + zapper.th){
			this.zapped = true;
		}
	}

}

function dRect(X,Y,W,H,D,POS){

	let s = 1/(1+(D*scale));
	let x = X*s+POS;
	let y = Y*s;
	let w = W*s;
	let h = H*s;
	rect(x,y,w,h);
}

function dPoint(X,Y,D,POS){
	//receives X,Y,D in pixels. D is distance from view point in 'pixels'. X,Y => W,H

	let s = 1/(1+(D*scale));

	strokeWeight(s*weight);
	let x = X*s;
	let y = Y*s;
	point(x+POS,y);
}

function dImage(X,Y,D,O,IMG){

	let s = 1/(1+(D*scale));

	let x = X*s;
	let y = Y*s;
	image(IMG,x+O,y,IMG.width*s,IMG.width*s);

}
