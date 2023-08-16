var img="";
var status="";
objects = [];

function preload(){
    img = loadImage('ruler.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("modelStatus").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 720, 500);
if(status != ""){
    for (i = 0; i < objects.length; i++) {
        document.getElementById("modelStatus").innerHTML = "Status: Objects Detected";

        fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+", "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }

}

  
}