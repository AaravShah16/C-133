img="";
status="";
objects=[];

function preload(){
    img=loadImage('printer.jpg');
}

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_printers").innerHTML="Status:-Detecting Objects";
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
    image(img, 0, 0, 640, 420)
    if( status != ""){
        for( i=0; i < objects.length; i++){
         document.getElementById("status_printers").innerHTML="Status:-Objects Detected!";
         fill("#FF0000");
         percent=floor( objects[i].confidence * 100);
         text( "Printer" + percent + "%" , 50 , 100);
         noFill();
         stroke("#FF0000");
         rect( 50, 100, 400 , 300);
        }
    }
}

function back(){
window.location="index.html";
}