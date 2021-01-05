const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,Pendulum1,sling;

function setup() {
  var canvas = createCanvas(400,400);
  //create a physics engine
	engine = Engine.create();
  
	world = engine.world;

  var ground_options = {
    isStatic : true,
  
  }
  var ball_options = {
    restitution : 1.0,
  }
  
  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  World.add(world, ground);
  ground.shapeColor = 'white';
  
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  ball.shapeColor = 'red';
}

function draw() {
  
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

function mouseDragged(){
	Matter.Body.setPosition(Pendulum1.body,{x: mouseX, y: mouseY});
}