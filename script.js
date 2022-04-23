//call other files
  var [WIDTH, HEIGHT] = [928, 600];
  var [MOVESPEED, FALLSPEED] = [5,9]
  var player;
  var GameBackground;
  let fr = 60;
  var fall;
  var music;

//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 1;
  let cutscene

//collision
  var COLLISION;

  var ground   = new Block({x:-400,   y:0, w:2000, h:40,   color:[0,255,0], draw:true});
  var left    = new Block({x:-400,   y:-500, w:5, h:500,   color:[0,255,0], draw:true});
  var fire     = new Block({x:-35,  y:-50, w:50, h:60,   color:[0,255,0], draw:true});
  var pl1      = new Block({x:300,  y:-200, w:100, h:20,   color:[0,255,0], draw:true});

  var blocks = [ground, left, fire, pl1];
  console.log(blocks)

function setup() {
  createCanvas(windowWidth, HEIGHT,WEBGL);
  frameRate(fr)

  player = new Player();
  GameBackground = new Background();

  // video-music inladen
  fall = loadSound('data/sound/fall.mp3');
  music = loadSound('data/sound/background.mp3');
  //cutscene = createVideo( ['data/video/cuntscene.mov']);
  //cutscene.size (100,100);

}

function keyReleased() {
	switch(keyCode) {
		case 32:
			player.framesJumped = 0;
			break;
	}
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
}

//gameStates

function game_phase0(){
  //console.log("test")
  //cutscene.volume(1);
  //cutscene.play();
}

function game_phase1 (){
 //background
  COLLISION = checkCollision();
  blocks.forEach(b => b.draw());
 
  GameBackground.phase_1();
    
  //player
    player.draw();
    player.move();
    player.camera();
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

function showDebug(options){
  fill(0)
  console.log("overlapX: " + options.overlapX,10,20)
  console.log("dx: " + options.dx,100,20)
  console.log("overlapY: "   + options.overlapY,10,40)        
  console.log("dy: " + options.dy,100,40)
  console.log("colliding: " + options.colliding,10,60)
}