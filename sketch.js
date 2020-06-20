const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(840,320,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(980,320,70,70);
   
    platform1 = new Ground(840,240,400,20);
    box6 = new Box(735,200,70,70);
    box7 = new Box(805,200,70,70);
    box8 = new Box(875,200,70,70);
    box9 = new Box(945,200,70,70);
    platform2 = new Ground(840,120,300,20);

    box10 = new Box(770,100,70,70);
    box11 = new Box(840,100,70,70);
    box12 = new Box(910,100,70,70);


    
    
    stone = new Stone(200,100,70,70);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Chain(stone.body,{x:190, y:190});
}

function draw(){
    background(234);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   
    platform1.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    platform2.display();

    box10.display();
    box11.display();
    box12.display();


    
   
     
    stone.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.break();
}
