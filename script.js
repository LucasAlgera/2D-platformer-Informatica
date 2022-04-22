//call other files
  var [WIDTH, HEIGHT] = [928, 600];
  var [MOVESPEED, FALLSPEED] = [5,9]
  var player;
  var gameBackground;
  let fr = 6000;

//0.1/2/3 = menu, 1.1/2/3 = cutscene, 2.1/2/3 = level nr.1, etc.
  var gameState = 0;

//collision
  var COLLISION;

  var ground      = new Block({x:0,   y:0, w:WIDTH, h:40,   color:[0,255,0]});
  var wall-left   = new Block({x:0,   y:0, w:WIDTH, h:40,   color:[0,255,0]});

  var blocks = [ground];
  console.log(blocks)

function setup() {
  createCanvas (WIDTH, HEIGHT,WEBGL);
  frameRate(fr)

  player = new Player();
  // gameBackground = new Background();
}

function draw() {
  // white background
  background(255);
  fill(0);  

  // set player collision
  COLLISION = checkCollision();

  // draw the blocks
  blocks.forEach(b => b.draw());

  // draw the player
  player.draw();  

  // move the player
  player.move();  

  // move the camera
  player.camera();
}


function keyReleased() {
	switch(keyCode) {
		case 32:
			player.framesJumped = 0;
			break;
	}
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

        //showDebug({ overlapX:overlapX, overlapY:overlapY, dx:dx, dy:dy, colliding:colliding});
      }
    }

  });

  return colliding;
}

function showDebug(options){
  fill(0)
  text("overlapX: " + options.overlapX,10,20)
  text("dx: " + options.dx,100,20)
  text("overlapY: "   + options.overlapY,10,40)        
  text("dy: " + options.dy,100,40)
  text("colliding: " + options.colliding,10,60)
}