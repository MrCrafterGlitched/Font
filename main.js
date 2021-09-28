nose_x=0
nose_y=0
leftWrist=0
rightWrist=0
Difference=0
Name="Hello"
function setup() {
    canvas=createCanvas(400,400)
    canvas.position(500,150)

    video=createCapture(VIDEO)
    video.size(400,400)
    video.position(50,150)
    PoseNet=ml5.poseNet(video,model_loaded)
    PoseNet.on("pose",getPoses)
}
function model_loaded() {
    console.log("Model is loaded")
}
function draw() {
    Name=document.getElementById("Name_text").value
    background("#13d6a2")
    textSize(Difference)
    fill("azure") 
    text(Name,nose_x,nose_y)
}
function getPoses(results) {
    if (results.length>0) {
        console.log(results)
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
    leftWrist=results[0].pose.leftWrist.x
    rightWrist=results[0].pose.rightWrist.x
    Difference=floor(leftWrist-rightWrist)
    document.getElementById("shape_size").innerHTML="The size of the text is "+ Difference +" px"
    }
}