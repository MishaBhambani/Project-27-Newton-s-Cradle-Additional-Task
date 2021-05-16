const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200, 400, 50, 50);
	bobObject2 = new Bob(300, 400, 50, 50);
	bobObject3 = new Bob(400, 400, 50, 50);
	bobObject4 = new Bob(500, 400, 50, 50);
	bobObject5 = new Bob(600, 400, 50, 50);

	roof = new Roof(400, 150, 600, 50)

	rope1 = new Rope(bobObject1.body, roof.body, -200, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 200, 0);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x: 200, y: 500});
	 }
   }