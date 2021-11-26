var trex, trex_running, edges;
var groundImage;
var ground

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //Creating ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);
  
}




function draw(){
  //set background color 
  background(180);
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //making the ground move
  ground.velocityX = -2

  //making the ground infinite
  if(ground.x < 0){
     ground.x = ground.width/2
  }
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down and collied it on the ground
  
  trex.collide(ground);
  drawSprites();
}
