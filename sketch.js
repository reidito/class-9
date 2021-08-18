var sprite
function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if (keyIsDown(LEFT_ARROW)){
  sprite.x-=2
}
drawSprites();


}




