var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700, 200, 60, height/2);

  car.velocityX = speed/2;
}

function draw() {
  background(255,255,255);
  var deformation = (0.5 * weight * speed * speed) / 22500;

  if(deformation < 100){
    car.shapeColor = "green";
  } else if(deformation >= 100 && deformation <= 180){
    car.shapeColor = "yellow";
  } else if(deformation > 180){
    car.shapeColor = "red";
  }

  car.collide(wall);

  drawSprites();
}