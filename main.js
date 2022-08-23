   function setup() {
      canvas = createCanvas(700 , 600);
      canvas.parent('canvas');
      
      video = createCapture(VIDEO);
      video.size(700 , 600);
      video.hide();
   
      poseNet = ml5.poseNet(video, modelLoaded);
   }

   function draw(){
      image(video, 0, 0, 700, 600);
   }

   function modelLoaded(){
      console.log("Model Loaded!");
   }