
img = "";
status = "";
x = "";
y = "";
width = "";
height = "";
objects = [];

function preload(){
    img = loadImage("couch.jpg");

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded :)");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status != ""){
        for(i=0;i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            x = objects[i].x;
            
            y = objects[i].y;
            
            width = objects[i].width;
            
            height = objects[i].height;
           

            fill("#0000ff");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%", x+10, y+10);
            noFill();
            stroke("#0000ff");
            rect(x, y, width, height);
        }
    }
}
