let mobileNet;
let classifier;
let video;
let label = '';

function setup(){
	createCanvas(600,550);
	
	video  = createCapture(VIDEO);
	video.hide();
	
	
	mobileNet = ml5.featureExtractor('MobileNet', modelReady);
	classifier = mobileNet.classification(video, videoReady);
	
	
}

function draw(){
	background(0);
	image(video, 0, 0);
	fill(255);
	textSize(30);
	text(label, 10, 525);
}

function modelReady(){
	print("Model is Ready!");
	
	//mobileNet.predict(gotResults);
}

function videoReady(){
	print("C\Video is Ready!");
	
	//mobileNet.predict(gotResults);
}

function gotResults(error, results){
	if(error){
		print(error);
	}else{
		label = results[0].label;
		mobileNet.predict(gotResults);
	}
}
