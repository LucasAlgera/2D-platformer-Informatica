///call other files
var camerax;
var bcolliding;
var enemyColliding;

var Names = {};
Names.Ground = 0;
Names.Platform = 1;
Names.IslandShort = 5;
Names.IslandLong = 6;
Names.Spike = 2;
Names.Snail = 3;
Names.Frog = 4;

//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 0;
//  let currentLevel;

//collision
//Gamestate 2
  ground = new Block({x:-450,   y:0, w:4000, h:40,color:[0,255,0], vis:false ,name:Names.Ground, lvl:0});
  lwall = new Block({x:-450,   y:-HEIGHT, w:10, h:HEIGHT,color:[0,255,0], vis:false ,name:Names.Ground, lvl:0});
  p1_lvl2 = new Block({x:600,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform , lvl:2});
  p2_lvl2 = new Block({x:450,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:2});
  p3_lvl2 = new Block({x:900,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:2});
  spike_lvl2 = new Block({x:500,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:2});
  snail1_lvl2 = new Enemy({x:700,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:650, moveTo2:900, lvl:2});
  snail2_lvl2 = new Enemy({x:1000,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:950, moveTo2:1500, lvl:2});
  snail3_lvl2 = new Enemy({x:1400,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:950, moveTo2:1500, lvl:2});


//Gamestate 3 
  spike1_lvl3 = new Block({x:200,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  p1_lvl3 = new Block({x:300,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:3});
  spike2_lvl3 = new Block({x:350,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  frog1_lvl3 = new Enemy({x:600,   y:-50, w:50, h:50,color:[0,255,0], vis:false ,name:3, move:false,frog:true, jumpTo:-300, jumpFrom:-50, lvl:3});
  p2_lvl3 = new Block({x:700,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:3});
  p3_lvl3 = new Block({x:950,   y:-200, w:200, h:50,color:[0,255,0], vis:false ,name:Names.IslandShort, lvl:3});
  p4_lvl3 = new Block({x:1400,   y:-200, w:200, h:50,color:[0,255,0], vis:false ,name:Names.IslandShort, lvl:3});
  spike3_lvl3 = new Block({x:900,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike4_lvl3 = new Block({x:1000,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike5_lvl3 = new Block({x:1100,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike6_lvl3 = new Block({x:1200,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike7_lvl3 = new Block({x:1300,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike8_lvl3 = new Block({x:1400,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike9_lvl3 = new Block({x:1500,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});
  spike10_lvl3 = new Block({x:1600,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:3});

  snail1_lvl3 = new Enemy({x:1650,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:1700, moveTo2:2000, lvl:3});
  p5_lvl3 = new Block({x:2100,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:3});
  frog2_lvl3 = new Enemy({x:2175,   y:-50, w:50, h:50,color:[0,255,0], vis:false ,name:3, move:false,frog:true, jumpTo:-300, jumpFrom:-50, lvl:3});
  p6_lvl3 = new Block({x:2250,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:3});


//Gamestate 4
  p1_lvl4 = new Block({x:200,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:4});
  p2_lvl4 = new Block({x:400,   y:-200, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:4});
  p3_lvl4 = new Block({x:600,   y:-250, w:600, h:50,color:[0,255,0], vis:false ,name:Names.IslandLong, lvl:4});
  snail1_lvl4 = new Enemy({x:800,   y:-300, w:100, h:50,color:[0,255,0], vis:false ,name:3, move:true, moveTo1:600, moveTo2:1000, lvl:4});
  frog1_lvl4 = new Enemy({x:1100,   y:-300, w:50, h:50,color:[0,255,0], vis:false ,name:3, move:false,frog:true, jumpTo:-550, jumpFrom:-300, lvl:4});
  p4_lvl4 = new Block({x:1350,   y:-200, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:4});
  p5_lvl4 = new Block({x:1550,   y:-100, w:50, h:100,color:[0,255,0], vis:false ,name:Names.Platform, lvl:4});
  spike1_lvl4 = new Block({x:300,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike2_lvl4 = new Block({x:400,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike3_lvl4 = new Block({x:500,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike4_lvl4 = new Block({x:600,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike5_lvl4 = new Block({x:700,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike6_lvl4 = new Block({x:800,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike7_lvl4 = new Block({x:900,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike8_lvl4 = new Block({x:1000,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike9_lvl4 = new Block({x:1100,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike10_lvl4 = new Block({x:1200,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike11_lvl4 = new Block({x:1300,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});
  spike12_lvl4 = new Block({x:1400,   y:-50, w:100, h:50,color:[0,255,0], vis:false ,name: Names.Spike, lvl:4});

//Gamestate 5
  boss = new Enemy({x:500,   y:-300, w:300, h:300,color:[0,255,0], vis:false ,name:3,jumpTo:-550, jumpFrom:-300, lvl:6, boss:true, move:false,frog:true,  frog:false});
  p1_lvl5 = new Block({x:0,   y:-200, w:10, h:200,color:[0,255,0], vis:false ,name:Names.Ground, lvl:6});
  p2_lvl5 = new Block({x:1000,   y:-200, w:10, h:200,color:[0,255,0], vis:false ,name:Names.Ground, lvl:6});

//Object Arrays
  blocks = [ground, lwall, p1_lvl2, p2_lvl2, p3_lvl2, spike_lvl2, //<---Level1
           spike1_lvl3, p1_lvl3, spike2_lvl3, p2_lvl3, p3_lvl3, p4_lvl3,spike3_lvl3, spike4_lvl3, spike5_lvl3, spike6_lvl3, spike7_lvl3, spike8_lvl3, spike9_lvl3,spike10_lvl3, p5_lvl3, p6_lvl3, //<---Level2
           p1_lvl4, p2_lvl4,p3_lvl4, p4_lvl4, p5_lvl4, p4_lvl3, spike1_lvl4, spike2_lvl4, spike3_lvl4, spike4_lvl4, spike5_lvl4, spike6_lvl4, spike7_lvl4, spike8_lvl4, spike9_lvl4,spike10_lvl4, spike11_lvl4, spike12_lvl4, //<---Level3
            p1_lvl5, p2_lvl5 //<---Bossfight
           ];
  console.log(blocks)
  enemies = [snail1_lvl2, snail2_lvl2, snail3_lvl2, //<---Level1
            frog1_lvl3, snail1_lvl3, frog2_lvl3, //<---Level2
            snail1_lvl4, frog1_lvl4 //<---Level3
             ,boss
            ];
  console.log(enemies)
function setup() {
  //settings
    createCanvas(WIDTH, HEIGHT,WEBGL);
    frameRate(60);

  //variables
    createcam = createCamera();
    player = new Player();
    MenuBackground = new BackgroundMenu();
    GameBackground = new Background();

  
  //cutscene
    cutscene = createVideo(['data/video/cutscene.mp4']);
    cutscene.hide(); //puts video inside of the canvas
    cutscene2 = createVideo(['data/video/cutscene2.mov']);
    cutscene2.hide(); //puts video inside of the canvas

  //local storage for levels
}


function draw(){  
  background(255, 255, 255);
  //gameStates
  if(gameState == 10){
    image(exitscreen, camerax-W/2, -550);
  } else if(gameState == 0){
      
      MenuBackground.phase_1();  
      MenuBackground.camera();
      if (keyIsDown(13)){
        crickets.loop();
        cutscene.play();
        gameState = 1;
      }
  } else if(gameState == 1){
      image(cutscene, camerax-W/2, -550,W,H);
      if(keyIsDown(32)){
        gameState = 2;
        cutscene.stop()
      }
    cutscene.onended(pstate); //check when cutscene is done playing
      currentLevel = 1;
      storeItem('currentLevel', currentLevel);
      
  } else if(gameState == 2){ //GAME STATE 2
      //background
      visual();
    
      //sign
      image(sign_1, 30,-50, 50,50);
      image(sign_go, 1650,-50, 50,50);
      if (crickets.isPlaying()){
        crickets.stop();
        music.setVolume(0.4);
        music.loop();
      }
      //player
      if (alive){
        player.draw();
        player.move();
        player.camera();
      } else{
        player.dead();
      }
      currentLevel = 2
      storeItem('currentLevel', currentLevel);

    if(keyIsDown(82) || player.x > 1650){
      gameState = 3;
      player.x = -200;
      if (!music.isPlaying()){
        music.loop();
      }
    }

       
  } else if(gameState == 3){
      //background
      visual();
    
      //sign
      image(sign_2, 30,-50, 50,50);
      image(sign_go, 2500,-50, 50,50);

      //player
      if (alive){
        player.draw();
        player.move();
        player.camera();
      } else{
        player.dead();
      }
    
      currentLevel = 3;
      storeItem('currentLevel', currentLevel);
    
      if(keyIsDown(82) || player.x > 2500){
      gameState = 4;
      player.x = -200;
      if (!music.isPlaying()){
        music.loop();
      }
    }
  } else if(gameState == 4){
      //background
      visual();
    
      //sign
      image(sign_3, 30,-50, 50,50);
      image(sign_go, 2000,-50, 50,50);

      //player
      if (alive){
        player.draw();
        player.move();
        player.camera();
      } else{
        player.dead();
      }
      currentLevel = 4;
      storeItem('currentLevel', currentLevel);
    
      if(keyIsDown(82) || player.x > 2000){
      gameState = 5;
      player.x = 0;
      boss_music.loop();
      cutscene2.play();
    }
  } else if(gameState == 5){
      translate(0,0,-68);
      image(cutscene2, camerax-W/2-40, -530,W,H);
      if(keyIsDown(32)){
        gameState = 6;
        cutscene2.stop()
      }
    cutscene2.onended(pstate); //check when cutscene is done playing
      currentLevel = 5;
      storeItem('currentLevel', currentLevel);
  }else if(gameState == 6){
      //background
      visual();
      if (music.isPlaying()){
        music.stop();
      }
    
      //sign
      image(sign_4, 30,-50, 50,50);
      image(sign_go, 2000,-50, 50,50);

      //player
      if (alive){
        player.draw();
        player.move();
        player.camera();
      } else{
        player.dead();
      }
      currentLevel = 6;
      storeItem('currentLevel', currentLevel);
  }else if(gameState == 7){
      //background
      visual();
    
      //sign
      image(sign_5, 30,-50, 50,50);
      image(sign_go, 500,-50, 50,50);
    image(log_pile, 200,-74, 200,74);

      //player
      if (alive){
        player.draw();
        player.move();
        player.camera();
      } else{
        player.dead();
      }
      boss_music.stop();
      currentLevel = 7;
      storeItem('currentLevel', currentLevel);
      if(player.x > 500){
        gameState = 0;
        player.x = 0;
        boss.bossHP = 370;
    }
  }
}

//Check for button press
function mouseClicked() {
  //Console log click position
  console.log(mouseX + " " + mouseY)
  //Menu
  if (gameState == 0) {
    if (mouseX > 475 && mouseX < 705) {
      if (mouseY > 320 && mouseY < 370) {
        crickets.loop();
        cutscene.play();
        boss.x = 500;

        if (typeof(getItem('currentLevel')) == "undefined") {
          currentLevel = 1;
        } else {
          currentLevel = getItem('currentLevel'); 
        }
        storeItem('currentLevel', currentLevel);
        currentLevel = getItem('currentLevel');
        if (currentLevel === null) {
           currentLevel = 1;
        }
        if(currentLevel == 7){
          currentLevel = 1;
        }
        gameState = currentLevel;
      }
      if (mouseY > 380 && mouseY < 430) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t";
      }
      if (mouseY > 440 && mouseY < 490) {
        gameState = 10;
        crickets.stop();
        music.stop();
        hey.play();
        fail;
      }
    }
  } else if (!alive) {
    if (mouseX > 282  && mouseX < 931) {
      if (mouseY > 500 && mouseY < 564) {
        player.x = 8;      
        player.y = -110;
        alive = true;
        gameState = 0;
      }
    }
  }
}

function die() {
  if (alive){
    fall.play();
    music.stop();
    alive = false;
  }
}

//after cutscene is done playing
function pstate() {
  if(gameState == 1){
    gameState = 2;
  }
  if(gameState == 5){
    gameState = 6;
  }
}

function visual() {
  //background
  COLLISION = checkCollision();
  DAMAGE = checkDamage();
  GameBackground.phase_1();
  blocks.forEach(b => b.draw());
  enemies.forEach(b => b.draw());
}

function checkCollision(){   

  colliding = false;

  // check collision for each block
  blocks.forEach(function(block) {
    
    if (block.lvl == gameState || block.lvl == 0){
    
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
    }
  });

  return colliding;
}

function checkDamage(){   

  colliding = false;

  //ENEMY COLLISION
  enemies.forEach(function(enemy) {

    if (enemy.lvl == gameState){
      
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
    }
  });

  return colliding;
}
                                              