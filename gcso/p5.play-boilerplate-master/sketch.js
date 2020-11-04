var car, wall, speed, weight
function setup() {
  speed = random(55, 90);
  weight = random(400, 1500);
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1200, 200, 50, 120);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);  
  if (wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500
    if (deformation<100) {
      car.shapeColor = color(0, 255, 0);
    }
    if (deformation>100 && deformation<180) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation>180) {
      car.shapeColor= color(255, 0, 0);
    }
  }
  drawSprites();
}