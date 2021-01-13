let mobileNet;
let test;

function modelReady(){
	print("Model is Ready!");
	
	mobileNet.predict(test, gotResults);
}

function gotResults(error, results){
	if(error){
		print(error);
	}else{
		print(results);
		let label = results[0].label;
		fill(0);
		textSize(30);
		text(label, 100, 200);
	}
}

function imageReady(){
	print("Image is Ready!");
	image(test,0,0,width,height);
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	
	test  = createImg("images/dine.jpg", imageReady);
	
	mobileNet = ml5.imageClassifier('MobileNet', modelReady);
	
	
	
}