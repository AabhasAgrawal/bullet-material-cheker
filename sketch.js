var bullet,wall;
var speed,weight,thicknes; 

function setup() {
  createCanvas(1600,400);
 bullet  =  createSprite(50, 200, 50, 10);
  
  speed=random(50,90);
  thicknes=random(20,80);
  weight=random(30,52);
  bullet. velocityX=speed;

  wall =  createSprite(1300, 200,thicknes, 200);

}//end of setup

function draw() {
  background(0);  

  bullet.shapeColor=("white")

if(wall.x-bullet.x<(bullet.width+wall.width)/2){

bullet.velocityX=0;
var deformation =0.5*speed*weight*speed*thicknes/22509;
if(deformation>250){

  wall.shapeColor=color(255,0,0)
}
if(deformation<250 && deformation>180){

 wall.shapeColor=color(230,230,0)
}
if(deformation<180){

wall.shapeColor=color(0,255,0)
}
}
  drawSprites();
}//end of draw 
//end of code