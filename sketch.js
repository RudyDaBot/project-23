var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;
var box1, box2, box3;
var world, engine;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	 

	engine = Engine.create();
	world = engine.world;

	box1=new box(400,655,60,10);
	box2=new box(365,630,10,60);
	box3=new box(425,630,10,60);
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution : 0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true} );
 	World.add(world, ground);


	Engine.run(engine);
  
     
}
	


function draw() {
  rectMode(CENTER);
  background(0);


 box1.display();
 box2.display();
 box3.display();
 
 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();



}
 


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
 }
  if (keyCode===LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-5;
	packageBody.position.x=packageBody.position.x-5;

}
if (keyCode===RIGHT_ARROW) {
  helicopterSprite.x=helicopterSprite.x+5;
  packageBody.position.x=packageBody.position.x+5;

}

}



