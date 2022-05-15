 //call other files
  var player;
  var GameBackground;
  var MenuBackground;
  var fall;
  var music;
  var camerax;
  var bcolliding;
  var enemyColliding;

var Names = {};
Names.Ground = 0
Names.Spike = 2


//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 0;
  let cutscene

//framerate
  let fr = 60;

//collision
  var COLLISION;
  ground = new Block({x:-400,   y:0, w:4000, h:40,color:[0,255,0], vis:false ,name:0});
  lwall = new Block({x:-310,   y:-HEIGHT, w:10, h:HEIGHT,color:[0,255,0], vis:false ,name:0});
  p1 = new Block({x:600,   y:-100, w:50, h:100,color:[0,255,0], vis:true ,name:0});
  p2 = new Block({x:450,   y:-100, w:50, h:100,color:[0,255,0], vis:true ,name:0});
  spike = new Block({x:500,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike});

  var blocks = [ground, lwall, spike, p1, p2];

  snail = new Enemy({x:100,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:2, move:true, moveTo1:100, moveTo2:450});

  var enemies = [snail];
  console.log(blocks)


function setup() {
  createCanvas(WIDTH, HEIGHT,WEBGL);
  frameRate(fr) 

  player = new Player();
  MenuBackground = new BackgroundMenu();
  GameBackground = new Background();

  
  //cutscene
    cutscene = createVideo(['data/video/cutscene.mp4']);
    cutscene.hide(); //puts video inside of the canvas
    cutscene.onended(cutDone); //check when cutscene is done playing

}

function draw(){  
  background(0);

  //gameStates
    if(gameState == 0){
      game_phase0();
    }
    if(gameState == 1){
      game_phase1();
    }
    if(gameState == 2){
      game_phase2();
    }
    if(gameState == 3){
      game_phase3();
    }
    if(gameState == 4){
      game_phase4();
    }
    if(gameState == 5){
      game_phase5();
    }
    if(gameState == 6){
      game_phase6();
    }
    if(gameState == 7){
      game_phase7();
    }
    if(gameState == 8){
      game_phase8();
    }
  }

//gameStates
function game_phase0(){
  MenuBackground.phase_1();  
  MenuBackground.camera();
    if (keyIsDown(13)){
      gameState = 1;
      playerAlive = 0;
      music.loop();
      cutscene.play()
    }
}
function game_phase1 (){
  image(cutscene, camerax-W/2, -550,W,H);
  if(keyIsDown(32)){
    gameState = 2;
    cutscene.stop()
  }
}

//after cutscene is done playing
function cutDone() {
  gameState++;
}

function game_phase2 (){
 //background
  COLLISION = checkCollision();
  GameBackground.phase_1();
  blocks.forEach(b => b.draw());
  enemies.forEach(b => b.draw());

  //sign
  image(sign_1, 30,-50, 50,50);
  //player
    player.draw();
    player.move();
    player.camera();
}
function game_phase3 (){
  GameBackground.phase_1();

}
function game_phase4 (){
  GameBackground.phase_1();

}
function game_phase5 (){
  GameBackground.phase_1();

}
function game_phase6 (){
  GameBackground.phase_1();

}
function game_phase7 (){
  GameBackground.phase_1();

}
function game_phase8 (){
  GameBackground.phase_1();
  
}


function checkCollision(){   

  colliding = false;

  // check collision for each block
  blocks.forEach(function(block) {
    
    // calculate difference from x and y axis centres
    let dx = (player.x + player.halfWidth) - (block.x + block.halfWidth);
    let dy = (player.y + player.halfHeight) - (block.y + block.halfHeight);

    let combinedHalfWidths  = player.halfWidth + block.halfWidth;
    let combinedHalfHeights = player.halfHeight + block.halfHeight;

    // x-axis collision?
    if(Math.abs(dx) < combinedHalfWidths){
      
      // y-axis collision?
      if(Math.abs(dy) < combinedHalfHeights){          

        let overlapX = combinedHalfWidths - Math.abs(dx);
        let overlapY = combinedHalfHeights - Math.abs(dy);          

        // collision is on the smallest overlap
        if(overlapX >= overlapY){
          if(dy > 0) {
            player.y += overlapY;
            colliding = "top";
            bcolliding = block.name; 
          }
          else {            
            player.y -= overlapY;
            colliding = "bottom";
            bcolliding = block.name; 
          }
        }
        else{
          if(dx > 0){ 
            player.x += overlapX; 
            colliding = "left";
            bcolliding = block.name; 
          }
          else {
            player.x -= overlapX;
            colliding = "right";
            bcolliding = block.name; 
          }
        }

      }
    }

  });
  

  //ENEMY COLLISION
  enemies.forEach(function(enemy) {
    
    // calculate difference from x and y axis centres
    let ex = (player.x + player.halfWidth) - (enemy.x + enemy.halfWidth);
    let ey = (player.y + player.halfHeight) - (enemy.y + enemy.halfHeight);

    let combinedHalfWidthsEnemy  = player.halfWidth + enemy.halfWidth;
    let combinedHalfHeightsEnemy = player.halfHeight + enemy.halfHeight;

    // x-axis collision?
    if(Math.abs(ex) < combinedHalfWidthsEnemy){
      
      // y-axis collision?
      if(Math.abs(ey) < combinedHalfHeightsEnemy){          

        let overlapXEnemy = combinedHalfWidthsEnemy - Math.abs(ex);
        let overlapYEnemy = combinedHalfHeightsEnemy - Math.abs(ey);          

        // collision is on the smallest overlap
        if(overlapXEnemy >= overlapYEnemy){
          if(ey > 0) {
            player.y += overlapYEnemy;
            colliding = "top";
            enemyColliding = enemy.name; 
          }
          else {            
            player.y -= overlapYEnemy;
            colliding = "bottom";
            enemyColliding = enemy.name; 
          }
        }
        else{
          if(ex > 0){ 
            player.x += overlapXEnemy; 
            colliding = "left";
            enemyColliding = enemy.name; 
          }
          else {
            player.x -= overlapXEnemy;
            colliding = "right";
            enemyColliding = enemy.name; 
          }
        }

      }
    }

  });

  return colliding;
}
                                              