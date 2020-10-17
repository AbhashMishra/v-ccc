
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
 
	ball = new paper(200,300,20,20);
	bin1 = new Bin(900,435,200,10);
	bin2 = new Bin(805,45,10,50);
	bin3 = new Bin(995,415,10,50);
	ground1 = new Ground(600,450,1200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();

  text("DUMP AND DUMPER",300,150);
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
       Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90});
	}
}



