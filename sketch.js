var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
  leaf_2_Img = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  createApples()
  createLeaves()
  drawSprites();
}

function createApples() {

if(frameCount%80 ===0){

  var apple = createSprite(Math.round(random(50,400)),-20,10,10,10)
  apple.addImage(appleImg)
  apple.scale= 0.1
  apple.velocityY = 10
 rabbit.depth=apple.depth
 rabbit.depth ++
}

}

function createLeaves() {

if(frameCount%80 ===0){
  
  var leaf = createSprite(Math.round(random(50,400)),-20,10,10,10)
  leaf.addImage(leafImg)
  leaf.scale=0.1
  leaf.velocityY = 2
rabbit.depth=leaf.depth
  var leaf_2 = createSprite(Math.round(random(50,400)),-20,10,10,10)
  leaf_2.addImage(leaf_2_Img)
  leaf_2.scale=0.1
  leaf_2.velocityY = 2
  rabbit.depth=leaf_2.depth

}


}
