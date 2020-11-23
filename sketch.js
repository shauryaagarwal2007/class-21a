var dog, goat;

var a,b,c,d;
function setup() {
  createCanvas(800,400);
  dog=createSprite(400, 300, 50, 50);
  dog.shapeColor="red";
  goat=createSprite(200,20,100,100);
  goat.shapeColor="red";
  a=createSprite(100, 100, 50, 50);
  a.shapeColor="red";
  b=createSprite(600, 100, 50, 50);
  b.shapeColor="red";
  c=createSprite(400, 100, 50, 50);
  c.shapeColor="red";
  d=createSprite(300, 100, 50, 50);
  d.shapeColor="red";
}

function draw() {
  background("black"); 
  
  if(istouch(goat,b)){
    b.shapeColor="blue";
    goat.shapeColor="blue";
  }
  else{
    b.shapeColor="red";
    goat.shapeColor="red";
  }

  goat.x=mouseX
  goat.y=mouseY
  
  drawSprites();
}

function istouch(shaurya, garima){
  if(garima.x - shaurya.x < garima.width/2 + shaurya.width/2&&
    shaurya.x - garima.x < garima.width/2 + shaurya.width/2&&
    garima.y - shaurya.y < garima.height/2 + shaurya.height/2&&
    shaurya.y - goat.y < garima.height/2 + shaurya.height/2
    ){
    return true;
  }
  else { 
    return false;
  }
}