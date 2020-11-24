
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
	createCanvas(800, 400);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperBall=new paper(50,330)
   dustbin1=new Dustbin(600,340,100,10)
   dustbin2=new Dustbin(550,300,10,100)
   dustbin3=new Dustbin(650,300,10,100)
   Ground=new ground(400,350,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  Ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW)
{
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15 ,y:-15});


}


}



