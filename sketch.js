
var a,b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "red";
  b = createSprite(400, 200, 80, 30);
  b.shapeColor = "red";
}

function draw() {
  background("blue");  

  b.x = World.mouseX;
  b.y = World.mouseY;

  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2
    && b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
      a.shapeColor = "orange";
      b.shapeColor = "orange";

      
    }
  else {
    a.shapeColor = "red";
    b.shapeColor = "red";


  }

  
  drawSprites();
}