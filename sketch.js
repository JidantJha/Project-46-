var player,enemy1,bullet,background,sound;
var playerImage,enemyImage,bulletImage,backgroundImage,restartImage;
var EnemyGroup,bulletGroup;

function preload(){
  sound=loadSound("sound.mp3");
  playerImage=loadImage("Images/Player.png");
  enemyImage=loadImage("Images/Enemy.png");
  bulletImage=loadImage("Images/Bullet.png");
  backgroundImage=loadImage("Images/Background.png");
  restartImage=loadImage("Images/Restart.png");
}

function setup(){
  background=createSprite(0,0);
  background.addImage(backgroundImage);
  background.scale=4;
  player= createSprite(190,windowHeight-50,10,10);
  player.addImage(playerImage);
  player.scale=1.00;
  bulletGroup=new Group();
  enemyGroup=new Group();
}
function draw() {
  createCanvas(windowWidth-130,windowHeight);
  //background("black");
    background.velocityY=5;
  if(background.y>windowHeight){
     background.y=background.height/2;
  }
  if (keyDown("Ctrl")) {
     createBullet();
}
 /* if (bullet.y<0) {
      bullet.y=600;
      bullet.depth=player.depth;
      player.depth++;
      bullet.velocityY=0;
      bullet.visible=false;
  }*/
  if(bulletGroup.isTouching(enemy1)){
     //enemyGroup.destroy();
     console.log("hi");
  }

  player.x=World.mouseX;
  enemy();
  
  drawSprites();

}

function enemy(){

  if(frameCount % 60 === 0){
     enemy1=createSprite(100,125,10,10);
     enemy1.addImage(enemyImage);
     enemy1.scale=0.6;
     enemy1.x=Math.round(random(0,500));
     enemy1.velocityY=5;
     enemyGroup.add(enemy1);
  }
  
}

function createBullet(){
  bullet=createSprite(300,50,10,10);
  bullet.addImage(bulletImage);
  bullet.scale=0.1;
  bullet.velocityY=-15;
  bullet.x=player.x;
  bullet.y=600
  bulletGroup.add(bullet);
  
}