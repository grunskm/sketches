//

let r = 0;
let rr = 1;
let g = 0;
let gg = 5;
let b = 0;
let bb = 10;

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
    r+=rr;
    g+=gg;
    b+=bb;

    background(r,g,b);
    
    if(r>255 || r<0){
      rr*=-1;
    }
    if(g>255 || g<0){
      gg*=-1;
    }
    if(b>255 || b<0){
      bb*=-1;
    }
}


