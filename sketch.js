var dog,food;

function preload()
{
	this.dog = loadImage("sprites/doglmg.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(200,300,20,20);
}


function draw() {  

  drawSprites();
  //add styles here

}



