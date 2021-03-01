

let scale = 0.0005;
let weight = 2;

let inc = 0;


function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	noFill();
	seperation = width*0.2;

}

function draw(){
	background(111);
	translate(width/2,height*0.2);


// 	view.display(-seperation,-10);
 	view.display(0,0);

}

function view(POS,OFF){
		push();
			translate(width/2+POS,height/2);
			dCylinder();
		pop();
}

function dCylinder(X,Y,D,R,OFF){
	
	
	for(c=0;c<91;c++){	
		let x = sin(c*4)*R+X;
		let y = Y;
		let d = cos(c*4)*R+D;
		dVertex(x,y,d,OFF);
	}
}

function dEllipse(X,Y,D,R,OFF){
	
	beginShape();
	for(c=0;c<91;c++){	
		let x = sin(c*4)*R+X;
		let y = Y;
		let d = cos(c*4)*R+D;
		dVertex(x,y,d,OFF);
	}
	endShape();
}

function dVertex(X,Y,D,OFF){
	//receives X,Y,D in pixels. D is distance from view point in 'pixels'. X,Y => W,H

	let s = 1/(1+(D*scale));
	stroke(50);
	strokeWeight(s*weight);
	let x = (OFF+X)*s;
	let y = Y*s;
	vertex(x,y);	
}

function dPoint(X,Y,D,OFF){
	//receives X,Y,D in pixels. D is distance from view point in 'pixels'. X,Y => W,H

	let s = 1/(1+(D*scale));
	stroke(255,0,100);
	strokeWeight(s*40);
	let x = OFF+X*s;
	let y = Y*s;
	point(x,y);	

}

function dImage(X,Y,D,IMG,OFF){

	let s = 1/(1+(D*scale));

	let x = OFF+X*s;
	let y = Y*s;
	image(IMG,x,y,IMG.width*s,IMG.width*s);

}

function dLine(X1,Y1,D1,X2,Y2,D2,DIV,OFF){

	let xSpace = (X2-X1)/DIV;
	let ySpace = (Y2-Y1)/DIV;
	let dSpace = (D2-D1)/DIV;

	for(i=0;i<DIV;i++){
		let s = 1/(1+((D1+dSpace*i)*scale));

		let x1 = X1+xSpace*i*s;
		let y1 = Y1+ySpace*i*s;
		let o1 = OFF*s;
				//point(x1,y1);
				s = 1/(1+((D1+dSpace*(i+1))*scale));
		let x2 = X1+xSpace*(i+1)*s;
		let y2 = Y1+ySpace*(i+1)*s;
		let o2 = OFF*s;
				//point(x2,y2);

		strokeWeight(weight*s);
		stroke(255*s);
	
		line(x1+o1,y1,x2+o2,y2);
	} 

}
