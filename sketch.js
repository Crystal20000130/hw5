const FAIL_TIME = 60; 
let NOW_STEP = 0;
const MM_FACE_SIZE = 28; //Mickey Mouse' face
const MM_EAR_SIZE = 15; //Mickey Mouse' ears
let MM_ARRAY = [];
let MUSIC = false;

class MM{
  constructor(mmx,mmy){
    this.faceX = mmx;
    this.faceY = mmy;
    this.leftEarX = mmx-15;
    this.rightEarX = mmx+15;
    this.earY = mmy-15;
    this.faceNow = 0;
    this.earNow = 0;
    this.speed = (this.faceY-this.faceNow)/FAIL_TIME;
  }
  display(){
    if(this.faceNow >0 && NOW_STEP > 0){
      ellipse(this.faceX,this.faceNow,MM_FACE_SIZE,MM_FACE_SIZE);
    }
    if(this.earNow > 0 && NOW_STEP > 1){
      ellipse(this.leftEarX,this.earNow,MM_EAR_SIZE,MM_EAR_SIZE);
      ellipse(this.rightEarX,this.earNow,MM_EAR_SIZE,MM_EAR_SIZE);
    }
  }
  update(){
    if(NOW_STEP > 0){
      this.faceNow += this.speed;
      if(this.faceNow > this.faceY){
        this.faceNow = this.faceY;
      }
    }
    if(NOW_STEP > 1){
      this.earNow += this.speed;
      if(this.earNow > this.earY){
        this.earNow = this.earY;
      }
    }
  }
  displayThenUpdate(){
    this.display();
    this.update();
  }
}


function setup() {
  createCanvas(400, 320);
  MM_ARRAY.push(new MM(48,60));
  MM_ARRAY.push(new MM(348,60));
  MM_ARRAY.push(new MM(118,40));
  MM_ARRAY.push(new MM(268,40));
  MM_ARRAY.push(new MM(65,150));
  MM_ARRAY.push(new MM(320,150));
  MM_ARRAY.push(new MM(118,225));
  MM_ARRAY.push(new MM(278,225));
  MM_ARRAY.push(new MM(200,70));
  MM_ARRAY.push(new MM(205,300));
}

var heartColor = 1;
var mySound;

function preload() {
  img = loadImage('mm11.jpg');
  mySound = loadSound("mhnew.mp3");
}

function draw() {
  background(0);
  image(img, 120,80, 150, 150);

  noStroke();
 
  if (heartColor == 1) {
    fill(128, 0, 0);
  }
  else {
    fill(255, 0, 0);
  }
  
  for(let i = 0; i < MM_ARRAY.length; ++i){
    MM_ARRAY[i].displayThenUpdate();
  }
  
}

function mousePressed() {
  if (heartColor == 1) {
    heartColor = 0;
  }
  else {
    heartColor = 1;
  }
  if(!MUSIC){
    mySound.play();
    MUSIC = MUSIC;
  }
  
}

function keyPressed(){
  if(key === ' '){
    NOW_STEP += 1;
  }
}
