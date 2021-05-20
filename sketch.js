
var snail, snail_img;
var tomato, tomato_img;
var ground, ground_img;

function preload(){
 ground_img = loadImage("ground.png");
}

function setup(){
 createCanvas(600,200);
 ground = createSprite(600,180);
 ground.addImage("ground1",ground.png);
}


function draw(){
  drawSprites();
  
}
