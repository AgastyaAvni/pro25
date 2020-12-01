
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin;
var ground;

function preload(){

	binImage= loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(300,400,60);
	ground= new Ground(800,670,1600,20);
	dustbin1= new Box(1000,660,200,20);
	dustbin2= new Box(900,580,20,180);
	dustbin3= new Box(1100,580,20,180);
	
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(255);

  dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  image(binImage, 870,450,250,210);
  
	paper.display();
	ground.display();
	

  
 
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-700});
	
	}
	
	
	
	}



