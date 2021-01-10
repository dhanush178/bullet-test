var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="blue";
  wall
  wall=createSprite(1200,200,thickness,height/2);
  car.velocityX=speed;
 
}

function draw() {
  background(255,255,255);  
  if(bullet.collide(wall)){
  
bullet.velocityX=0;
var damage=0.5*bulletweight*bulletspeed*bulletspeed/thickness*thickness*thickness;
if(damage>10){
  bullet.shapeColor="red";
}
if(damage<10){
  bullet.shapeColor="green";
}

  }
  drawSprites();
}

