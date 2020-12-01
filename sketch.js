 const Engine=Matter.Engine;
 const Bodies=Matter.Bodies;
 const World=Matter.World;
var ball;
var engine,world,ground;


function setup() {
  createCanvas(800,400);
 //creating the engine and adding it to world
  engine=Engine.create();
  world=engine.world;
 var ground_options={isStatic:true}
  ground=Bodies.rectangle(300,300,500,10,ground_options);
  World.add(world,ground);

  var ball_options={restitution:1.0}
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
  console.log(ground);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  

  rectMode(CENTER) ;
  rect(ground.position.x,ground.position.y,800,10);
  ellipse(ball.position.x,ball.position.y,20);

  //console.log(ground.position.x);
  drawSprites();
}