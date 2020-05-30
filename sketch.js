var player ; 

function setup() {
  createCanvas(400,600);
  player= new Thor();
}

function draw() {
  background("cyan");  
  player.display();
  drawSprites();
}