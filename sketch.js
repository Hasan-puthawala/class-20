var fixedrect, movingrect;



function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  fixedrect.shapeColor = "red";
  movingrect = createSprite(600,200,80,50);
  movingrect.shapeColor="red";
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.width/2 &&
    fixedrect.y - movingrect.y < fixedrect.he/2 + movingrect.width/2 ){
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  else {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }

  drawSprites();
}