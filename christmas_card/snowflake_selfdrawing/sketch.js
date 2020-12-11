
let tx=0;
let ty=0;


function setup(){
	createCanvas(2800,2000);
	// noSmooth();
	stroke(255);
	strokeWeight(2);
	background(255);
	angleMode(DEGREES);
	fill(0);
	rect(width*0.05-20,width*0.05-20,width*0.9+40,height-width*0.1+40);}

function mousePressed(){
	rect(width*0.05-20,width*0.05-20,width*0.9+40,height-width*0.1+40);
	for(q=0;q<10;q++){
		for(w=0;w<7;w++){
		push();
		tx = ((q+0.5)*(width*0.9)/10)+random(-100,100)+width*0.05;
		ty = ((w+0.5)*(height-width*0.1)/7)+random(-100,100)+width*0.05;
		// tx = random(width);
		// ty = random(height);
		translate(tx,ty);
		rotate(random(0,360));

		let x = 0;
		let y = 0;
		let seed1 = random(0,1000);
		let seed2 = random(0,1000);

		let scale = random(100,random(200,500));


		let freq1 = random(20,100);

		let int = random(40,100);
		let freq2 = random(20,70);

		let neg = random(-0.3,-0.1);
		let pos = random(0.7,1.1);

		stroke(map(scale,100,500,200,255));
		strokeWeight(map(scale,100,500,1,5));
		for(e=0;e<scale;e++){
			x += map(noise(seed1+e/freq1),0,1,neg,pos);
			y = map(noise(seed2+e/freq2),0,1,-int,int)*(noise(e/25));


			for(i=0;i<6;i++){
				push();
				rotate(60*i);
				rotate(y/map(e,0,scale,0.5,2));
				point(x,0);
				rotate(30);
				point(x/2,0);
				pop();
			}
		}
		pop();
	}
	}
}






function keyPressed(){
	if(keyCode===ENTER){
		saveCanvas("flurries","png");
	}
}
