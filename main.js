song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0;

function preload() {
        song = loadSound("music.mp3");
        song = loadSound("music2.mp3");

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500);

  if (scoreLeftWrist > 0.2) {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}
}

function gotPoses(results) {
    if(results.length > 0)
  {
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist)

    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
  }
}