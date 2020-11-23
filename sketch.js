
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall
var dustbin1
var Ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperBall=new paper(500,200)
   dustbin1=new Dustbin(200,200,100,100)
   Ground=new ground(400,650,800,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  dustbin1.display();
  Ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW)
{
Matter.body.applyForce(paperBall.body,paperBall.body.position,{x:85 ,y:-85});


}


}



