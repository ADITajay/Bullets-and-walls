var car,wall;
var speed,weight,Deformation,thickness;

function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
  car=createSprite(100, 200, 100, 50);
  wall=createSprite(700, 200, thickness, 100);
  speed=random(223,321);
  weight=random(30,52);
 
}

function draw() {

  background("black");  
  car.velocityX=speed;
  if(car.isTouching(wall)){
    car.velocityX=0;
    Deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(Deformation>10){
      wall.shapeColor="red";
    }
   
    if(Deformation<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}
