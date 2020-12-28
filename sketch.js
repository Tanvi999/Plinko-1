const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 

var ground; 

var score, turn;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,680,460,20);

  score = 0;
  turn = 5;
  
  for (var k = 0; k <= width; k = k+80)
  {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    //division[k].display();
  }

  /*//plinko rows
  for (var j = 40; j <= width; j = j+50)
  {
    plinko.push(new Plinko(j, 75));
    //plinko[j].display();
  }

  for (var j = 15; j <= width-10; j = j+50)
  {
    plinko.push(new Plinko(j, 175));
  }

  for (var j = 0; j < particle.length; j++)
  {
    particle[j].display;
  }*/
}

function draw() {
  background(0);  

  Engine.update(engine);

  for(var k = 0; k<division.length; k++)
  {
    division[k].display();
  }

  //plinko rows
  for (var j = 40; j <= width; j = j+50)
  {
    plinko.push(new Plinko(j, 75));
  }

  for (var j = 15; j <= width-10; j = j+50)
  {
    plinko.push(new Plinko(j, 175));
  }

  for (var j = 40; j <= width; j = j+50)
  {
    plinko.push(new Plinko(j, 275));
  }

  for (var j = 15; j <= width-10; j = j+50)
  {
    plinko.push(new Plinko(j, 375));
  }

  for (var j = 0; j < plinko.length; j++)
  {
    plinko[j].display();
  }

  if (frameCount % 90 === 0) 
  {
    particle.push(new Particle(200, 10, 5));
  }

  for (var j = 0; j < particle.length; j++)
  {
    particle[j].display();
  }

  ground.display(); 


  //drawSprites();
}