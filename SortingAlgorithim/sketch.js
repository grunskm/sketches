

var unsorted = [];
var sorted = [];
var seed = [];
var count;


function setup() {
	createCanvas(400,400);
	colorMode(HSB);
	frameRate(10);

	count = width-1;

	for(i=0;i<width;i++){
		seed.push(i);
	}

	for(i=0;i<width;i++){
		let h = floor(random(0,seed.length));
		unsorted.push(new UnsortedColumn(h));
		seed.splice(h,1);
	}
}


function draw(){
	background(255);
	for(i=0;i<unsorted.length;i++){
		unsorted[i].display(i);
	}

	for(e=0;e<sorted.length;e++){
		sorted[e].display(e);
	}
	

	scan();

	if(count<=0){
		noLoop();
	}
}

function UnsortedColumn(H){

	this.h = seed[H];
	
	this.display = function(X){
		stroke(0);
		line(X,height,X,height-this.h);	
	}
}

function SortedColumn(H){

	this.h = seed[H];
	
	this.display = function(X){
		stroke(255,0,0);
		line(X,height,X,height-this.h);	
	}
}

function scan(){
	let index = 0;
	let high = 0;

	while(index<unsorted.length){
		h = unsorted[index].h;
		if(h>high){
			high = h;
		}
		index++;
	}
	//sorted.unshift(new SortedColumn(high));
	//unsorted.splice(index,1);
	unsorted.pop();
	count--;
	print(count);
}


