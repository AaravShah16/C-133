img="";
status="";
objects=[];

function preload(){
    img=loadImage('clock.jpg');
}

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_clocks").innerHTML="Status:-Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image( img , 0 , 0 , 640 , 420)
    if( status != ""){
        for( i=0; i < objects.length; i++){
         document.getElementById("status_clocks").innerHTML="Status:-Objects Detected!";
         fill("#FF0000");
         percent=floor( objects[i].confidence * 100);
         text( "clock" + percent + "%" , 400 , 10);
         noFill();
         stroke("#FF0000");
         rect( 400 , 10, 300 , 300);
        }}
}

function back(){
window.location="index.html";
}