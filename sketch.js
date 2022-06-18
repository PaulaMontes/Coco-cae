
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bk;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var animal;
var food, fruit, fruit_con;
var button;
var rope;

function preload(){
  bk = loadImage('background.png');
  animal = loadImage('serpiente.png');
  food = loadImage ('coco.png');
}

function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Box (200,700,600,10);
  box1 = new Box (120, 200, 200, 20);
  box2 = new Box (380, 200, 200, 20);
  box3 = new Box (70, 350, 100, 20);
  box4 = new Box (250, 350, 130, 20);
  box5 = new Box (430, 350, 100, 20);
  box6 = new Box (60, 500, 80, 20);
  box7 = new Box (210, 500, 80, 20);
  box8 = new Box (400, 500, 170, 20);

  balloon1 = createImg ('balloon.png');
  balloon1.position(1, 210);
  balloon1.size(120, 120);
  balloon1.mouseClicked(airBlow1);

  balloon2 = createImg ('balloon.png');
  balloon2.position(1, 360);
  balloon2.size(120, 120);
  balloon2.mouseClicked(airBlow1);

  blower1 = createImg ('Blower.png');
  blower1.position(380, 210);
  blower1.size(120, 120);
  blower1.mouseClicked(airBlow2);

  blower2 = createImg('Blower.png');
  blower2.position(380, 360);
  blower2.size(120, 120);
  blower2.mouseClicked(airBlow2);

  button = createImg("cut_button.png");
  button.position(225, 15);
  button.size(50, 50);

  rope = new Rope(1,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  button.mouseClicked(drop);

}


function draw() 
{
  background(51);
  image (bk,0,0,500,700);
  image (animal, 250, 567, 200, 130);
  image(food,fruit.position.x,fruit.position.y,50,50);

  rope.show();

  Engine.update(engine);

  ground.show();
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  box7.show();
  box8.show();

}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit.con = null;
}

function airBlow1(){
  Matter.Body.applyForce(fruit, {x: 0, y: 0}, {x: 0.001, y:0});
}

function airBlow2(){
  Matter.Body.applyForce(fruit, {x: 0, y: 0}, {x: -0.001, y:0});
}

/*function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              return false;
            }
         }
}*/
