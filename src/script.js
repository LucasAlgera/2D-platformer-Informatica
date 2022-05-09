//set width, height, speed and fallspeed
  var [WIDTH, HEIGHT] = [window.innerWidth, 600];
  var [MOVESPEED, FALLSPEED] = [10,2]

//call other files
  var player;
  var GameBackground;
  var MenuBackground;
  var fall;
  var music;

//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 0;
  let cutscene

//framerate
  let fr = 60;

//collision
  var COLLISION;

//blocks in game
  var ground   = new Block({x:-400,   y:0, w:4000, h:40,color:[0,255,0], vis:true});
  var left    = new Block({x:-400,   y:-500, w:5, h:500,color:[0,255,0], vis:true});
  var pl1      = new Block({x:300,  y:-200, w:100, h:20,color:[0,255,0], vis:true});
  var pl2     = new Block({x:200,  y:-100, w:100, h:20, color:[0,255,0], vis:true});

  var blocks = [ground, left, pl1, pl2];
  console.log(blocks)


function setup() {
  createCanvas(WIDTH, HEIGHT,WEBGL);
  frameRate(fr)

  player = new Player();
  MenuBackground = new BackgroundMenu();
  GameBackground = new Background();

  
  //cutscene
    cutscene = createVideo(['data/video/cutscene.mov']);
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
  }

//gameStates
function game_phase0(){
  MenuBackground.phase_1();  
  MenuBackground.camera();
    if (keyIsDown(13)){
      gameState = 1;
      music.loop();
      cutscene.play()
    }
}
function game_phase1 (){
  image(cutscene, 100, -600,1000,600);
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
  blocks.forEach(b => b.draw());
  COLLISION = checkCollision();
  GameBackground.phase_1();
    
  //player
    player.draw();
    player.move();
    player.camera();
}


//COLLISION CHECK
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
          }
          else {            
            player.y -= overlapY;
            colliding = "bottom";            
          }
        }
        else{
          if(dx > 0){ 
            player.x += overlapX; 
            colliding = "left";
          }
          else {
            player.x -= overlapX;
            colliding = "right";
          }
        }

        // showDebug({ overlapX:overlapX, overlapY:overlapY, dx:dx, dy:dy, colliding:colliding});
      }
    }

  });

  return colliding;
}

//show collision in console
function showDebug(options){
  fill(0)
  console.log("overlapX: " + options.overlapX,10,20)
  console.log("dx: " + options.dx,100,20)
  console.log("overlapY: "   + options.overlapY,10,40)        
  console.log("dy: " + options.dy,100,40)
  console.log("colliding: " + options.colliding,10,60)
}

                                              