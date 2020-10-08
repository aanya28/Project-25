var box1,box2,box3, boxLeft, boxRight, boxBase, paper, boxPosition, boxY, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,650,1200,20);

	
	box1 = new Dustbin(500, 645, 200, 20);

	box2 = new Dustbin(400,600,20,100)
	
	box3 = new Dustbin(600,600,20,100);
	

	paper = new Paper(100,100,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();

  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		}
}



