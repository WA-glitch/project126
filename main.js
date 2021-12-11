song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0; 

function preload()
{
    song = loadSound("drive.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(400, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play();
}
