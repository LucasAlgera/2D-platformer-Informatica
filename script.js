 //call other files
  var camerax;
  var bcolliding;
  var enemyColliding;

var Names = {};
Names.Ground = 0
Names.Spike = 2
Names.Snail = 3


//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 0;

//collision
  ground = new Block({x:-400,   y:0, w:4000, h:40,color:[0,255,0], vis:false ,name:0});
  lwall = new Block({x:-310,   y:-HEIGHT, w:10, h:HEIGHT,color:[0,255,0], vis:false ,name:0});
  p1 = new Block({x:600,   y:-100, w:50, h:100,color:[0,255,0], vis:true ,name:0});
  p2 = new Block({x:450,   y:-100, w:50, h:100,color:[0,255,0], vis:true ,name:0});
  spike = new Block({x:500,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike});

  blocks = [ground, lwall, spike, p1, p2];
   console.log(blocks)

  snail = new Enemy({x:100,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:Names.Snail, move:true, moveTo1:100, moveTo2:450});
  snail2 = new Enemy({x:700,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:650, moveTo2:900});

  enemies = [snail, snail2];
  console.log(enemies)


function setup() {
  //settings
    createCanvas(WIDTH, HEIGHT,WEBGL);
    frameRate(60) 

  //variables
    createcam = createCamera();
    player = new Player();
    MenuBackground = new BackgroundMenu();
    GameBackground = new Background();

  
  //cutscene
    cutscene = createVideo(['data/video/cutscene.mp4']);
    cutscene.hide(); //puts video inside of the canvas
    cutscene.onended(pstate); //check when cutscene is done playing
}

function draw(){  
  background(0);

  //gameStates
  if(gameState == 0){
      
      MenuBackground.phase_1();  
      MenuBackground.camera();
      if (keyIsDown(13)){
        gameState = 1;
        playerAlive = 0;
        music.loop();
        cutscene.play()
      }
      
  } else if(gameState == 1){

      image(cutscene, camerax-W/2, -550,W,H);
      if(keyIsDown(32)){
        gameState = 2;
        cutscene.stop()
      }
      
      } if(gameState == 2){
      
      //background
      COLLISION = checkCollision();
      DAMAGE = checkDamage();
      GameBackground.phase_1();
      blocks.forEach(b => b.draw());
      enemies.forEach(b => b.draw());

      //sign
      image(sign_1, 30,-50, 50,50);
      //player
      player.draw();
      player.move();
      player.camera();

       
  } else if(gameState == 3){
      
      GameBackground.phase_1();
      
  } else if(gameState == 4){
      
      GameBackground.phase_1();
      
  } else if(gameState == 5){
      
      GameBackground.phase_1();

  } else if(gameState == 6){
  
      GameBackground.phase_1();

  } else if(gameState == 7){
      
      GameBackground.phase_1();

  } else if(gameState == 8){
      
      GameBackground.phase_1();

  }
}


//after cutscene is done playing
function pstate() {
  gameState++;
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

  return colliding;
}

function checkDamage(){   

  colliding = false;

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
                                              