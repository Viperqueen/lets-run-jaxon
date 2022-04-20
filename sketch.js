
var track = createSprite()
track.addImage("path.png")

function preload(){
 powerimg = loadImage(power.png)
 track = loadImage(path.png)
 energydrinkImg = loadImage(energyDrink.png)
 coinImg = loadImage(coin.png)
 bombImg = loadImage(bomb.png)
}

function setup(){
  createCanvas(400,400);

}

function draw() {
  background(0);
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4
path.scale = 1.2
}

if (path.y > 400){
  path.y = height/2;
}
