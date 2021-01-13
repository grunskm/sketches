//// Flip Book with Gum///////

	let samY;
	let samX;
	let samZ = 0;
	let num = 0;

	let eggWhite = [];
	let eggYolk = [];


function setup() {
	createCanvas(1800,3000);

	samX = random(100,1000);
	samY = random(100,1000);

	for(i=0;i<2;i++){
		for(e=0;e<5;e++){
			eggWhite.push( new EGGWHITE(i,e,i*5+e,samX,samY));
			eggYolk.push( new EGGYOLK(i,e,i*5+e,samX,samY));
		}
	}

	angleMode(DEGREES);
	stroke(0);
	noFill();
	textSize(20);

//////// Making Drawing ////////

}

function mousePressed(){
	num++;
	background(255);
	for(k=0;k<eggWhite.length;k++){

		samZ += 1;
		eggWhite[k].display(samZ);
		eggYolk[k].display(samZ);
	}
}

function keyPressed(){
	saveCanvas("frame"+num+".jpg","jpg");
}


function EGGYOLK(I,E,N,X,Y){

	this.xS = X;
	this.yS = Y;

	this.n = N;


	this.w = 900;
	this.h = 600;

	this.x = I*900;
	this.y = E*600;

	this.centerX = this.x+this.w*0.66;
	this.centerY = this.y+this.h*0.5;


	this.display = function(Z){

		this.zS = Z;

		rect(this.x,this.y,900,600);
		push();
			fill(255,230,50);
			beginShape();
			for(d=0;d<360;d++){
				let r = map(noiseSample(d,0.25,this.xS,this.yS,this.zS),0,1,this.h*0.05,this.h*0.15);
				let x = sin(d)*r+this.centerX;
				let y = cos(d)*r+this.centerY;
				vertex(x,y);
			}
			endShape();
		pop();
		
	}
}


function EGGWHITE(I,E,N,X,Y){

	this.xS = X;
	this.yS = Y;

	this.n = N;


	this.w = 900;
	this.h = 600;

	this.x = I*900;
	this.y = E*600;

	this.centerX = this.x+this.w*0.66;
	this.centerY = this.y+this.h*0.5;


	this.display = function(Z){

		this.zS = Z*0.1;

		rect(this.x,this.y,900,600);


		beginShape();
		for(d=0;d<360;d++){
			let r2 = map(noiseSample(d,0.25,this.xS,this.yS,this.zS),0,1,this.h*0.05,this.h*0.6);
			let r1 = map(noiseSample(d,1,this.xS,this.yS,this.zS),0,1,-this.h*0.1,this.h*0.1);
			let r = r2+r1;
			let x = sin(d)*r+this.centerX;
			let y = cos(d)*r+this.centerY;
			vertex(x,y);
		}
		endShape();
		text(floor(Z),this.x+20,this.y+this.h-20);
	}
}

function noiseSample(I,R,SEEDX,SEEDY,SEEDZ){
	let xxx = sin(I)*R+SEEDX;
	let yyy = cos(I)*R+SEEDY;
	let zzz = SEEDZ;
	return noise(xxx,yyy,zzz);

}

