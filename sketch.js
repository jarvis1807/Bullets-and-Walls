var wall, thickness;
var bullet, weight, speed;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = "gold"
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white"
  speed=random(223,321);
  weight=random(30, 52);
  thickness = random(22,83)
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  if(hascollided(bullet, wall))
  {
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/ (thickness*thickness*thickness)

    if(damage>10) 
    {
      wall.shapeColor = color(225,0,0)
    }

    if(damage<10)
    wall.shapeColor = color(0,225,0)
  
  }

  drawSprites();

}

function hascollided(bullet, wall)
{
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge)
{

  return true
}
return false
}
