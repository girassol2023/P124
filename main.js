
noseX = 0
noseY = 0

diference =  0 
pulsoex = 0
pulsodx = 0

function setup() {
    canvas = createCanvas(300, 300); 
    canvas.center();
    video = createCapture(VIDEO); 
    video.hide(); 
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() { 
    console.log('Model Loaded!');
  } 

  function gotPoses(results) {
    if(results.length > 0) {
      console.log(results); 
       noseX = results[0].pose.nose.x
    noseY= results[0].pose.nose.y
      pulsoex = results[0].pose.leftWrist.x
      pulsodx = results[0].pose.rightWrist.x
      diference = pulsoex - pulsodx
      
      console.log(noseX,noseY)
    } 
  }

function draw() { 
    image(video, 00, 00, 300, 300); 
    classifier.classify(video);
  }