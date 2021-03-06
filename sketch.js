var bread, breadImg;
var bgImg;
var friendGrp, enemyGrp;
var friend, enemy;


function preload(){

  bgImg = loadImage("Images/bg3.png");
  
  breadImg = loadImage("Images/bread1.png");

  friend1 = loadImage("Images/cheese.png");
  friend2 = loadImage("Images/cucumber.png");
  friend3 = loadImage("Images/lettuce.png");
  friend4 = loadImage("Images/olive.png");
  friend5 = loadImage("Images/patty.png");
  friend6 = loadImage("Images/salami.png");
  friend7 = loadImage("Images/tomato.png");

  enemy1 = loadImage("Images/bomb.png");
  enemy2 = loadImage("Images/bug.png");
  enemy3 = loadImage("Images/poisonapple.png");
  enemy4 = loadImage("Images/poop.png");
  enemy5 = loadImage("Images/rottenSB.png");
  enemy6 = loadImage("Images/sizzleBread.png");
 
}



function setup() {
  createCanvas(displayWidth - 50, displayHeight - 50);

  bread = createSprite(displayWidth/2 + 50, displayHeight -100 ,20,10)
  bread.addImage(breadImg);
  bread.scale = 0.5;

  friendGrp = new Group();
   
  enemyGrp = new Group();

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  

  spawnFriends();
  spawnEnemies();

  if (keyDown(LEFT_ARROW)){
    bread.x = bread.x -10;
  }

  if (keyDown(RIGHT_ARROW)){
    bread.x = bread.x +10;
  }


  for (var i = 0; i < friendGrp.length; i++){
   if (friendGrp.get(i).isTouching(bread)){
     friendGrp.get(i). velocityY = 0;
   }
  }

  drawSprites();
}



function spawnFriends(){
  if(frameCount % 50 === 0){
    friend = createSprite(10,20,10,10)
    //friend.scale = 0.5
    friend.velocityY = 10;
    friend.x = Math.round(random(50, displayWidth-70))
    var rand = Math.round(random(1,7))
    switch(rand){
      case 1 : friend.addImage(friend1);
               friend.scale = 0.5
       break;
      case 2 : friend.addImage(friend2);
               friend.scale = 0.8
       break;
      case 3 : friend.addImage(friend3);
               friend.scale = 0.5
       break;
      case 4 : friend.addImage(friend4);
              friend.scale = 0.5
       break;
      case 5 : friend.addImage(friend5);
               friend.scale = 0.5
       break;
      case 6 : friend.addImage(friend6);
               friend.scale = 0.5
       break;
      case 7 : friend.addImage(friend7);
               friend.scale = 0.2
       break;
       default : break;
    }
  friendGrp.add(friend);
  friend.lifetime = displayHeight-50/10;
  }
}

function spawnEnemies(){
  if (frameCount % 100 === 0){
  enemy = createSprite(10,20,10,10);
  enemy.velocityY = 15; 
 // enemy.scale = 0.5;
  enemy.x = Math.round(random(100,displayWidth-70));
  var rand = Math.round(random(1,6))

  switch(rand){
    case 1 : enemy.addImage(enemy1);
    enemy.scale = 0.5;
    break;
    case 2 : enemy.addImage(enemy2);
    enemy.scale = 0.5;
    break;
    case 3 : enemy.addImage(enemy3);
    enemy.scale = 0.2;
    break;
    case 4 : enemy.addImage(enemy4);
    enemy.scale = 0.5;
    break;
    case 5 : enemy.addImage(enemy5);
    enemy.scale = 0.5;
    break;
    case 6 : enemy.addImage(enemy6);
    enemy.scale = 0.5;
    break;

  }
 enemyGrp.add(enemy);
 enemy.lifetime = displayHeight-50/10;
}

}
