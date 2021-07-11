var box;
function setup() 
{
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background("black");
  if (keyIsDown(UP_ARROW))
  {
    background("ORANGE")
    box.position.y -= 5
  }
  if (keyIsDown(DOWN_ARROW))
  {
    background("GREEN")
    box.position.y += 5
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background("BLUE")
    box.position.x -= 5
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    background("RED")
    box.position.x += 5
  }
  drawSprites();
}




