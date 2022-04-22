//let pictures and camera
  let character_stand_right;
  let character_stand_left;
  let character_run_right;
  let character_run_left;
  let dead_right;
  let dead_left;
  let camera;

//set class variables
  var value = 0;
  var direction = 1;
  var velocity = 3;
  var minHeight = -100;
  var maxHeight = 300;
  var jumpPower = 15;
  var fallingSpeed = 9;
  var jumping = false;
  var jumpCounter = 0;

class Player{

  constructor() {
    camera = createCamera();
    character_stand_right = loadImage('picures/player/standing_right.gif');
    character_stand_left = loadImage('picures/player/standing_left.gif');
    character_run_right = loadImage('picures/player/running_right.gif');
    character_run_left = loadImage('picures/player/running_left.gif');
    dead_right = loadImage('picures/player/dead_right.png');
    dead_left = loadImage('picures/player/dead_left.png');
    
    this.x = 20;
    this.y = -110;
    this.w = 100;
    this.h = 100;    
    

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;

    // jump variables    
    this.maxJumpframes = 2000;
    this.framesJumped = 0;
  }

  move(){

    // start with gravity
    this.gravity();
  
    if (keyIsDown(65)){
      if(COLLISION != "left" && this.x >= 0)
        this.x -= MOVESPEED;
    }

    if (keyIsDown(68)) {
      if(COLLISION != "right" && this.x + this.w < WIDTH)
        this.x += MOVESPEED;              
    }

    if (keyIsDown(8)) {
      console.log(this)           
    }


    // if (keyIsDown(UP_ARROW)) {
    //   if(COLLISION != "top")
    //     this.y -= MOVESPEED;              
    // }

    // if (keyIsDown(DOWN_ARROW)) {
    //   if(COLLISION != "bottom")
    //     this.y += MOVESPEED;              
    // }

    
    // spatie
    if (keyIsDown(32)) {      
      if(this.framesJumped < this.maxJumpframes){
        this.y -= 13;
        this.framesJumped += 1;
      }
    }
   
  }

  gravity(){
    if(COLLISION != "bottom"){
      this.y += FALLSPEED;
    }
  }
 
  //draw player
    draw(){
      //rect(this.x, this.y, this.w, this.h);
      
    //direction the player is facing
      if (keyIsDown(68)) {
        value = 0;
      }
      if (keyIsDown(65)) {
        value = 1;
      }
  
      
    //different pictures for different actions
      if (keyIsDown(68) && value == 0) {
        image(character_run_right, this.x, this.y, this.w, this.h);
      } else if (keyIsDown(17) && value == 0) {
        image(dead_right, this.x, this.y, this.w, this.h);
      } else{
        if(value == 0){
          image(character_stand_right, this.x, this.y, this.w, this.h);
        }
      }
  
      if (keyIsDown(65)) {
        image(character_run_left, this.x, this.y, this.w, this.h);
      } else if (keyIsDown(17) && value == 1) {
        image(dead_left, this.x, this.y, this.w, this.h);
      } else{
        if(value == 1){
          image(character_stand_left, this.x, this.y, this.w, this.h);
        }
      }
    }
  camera(){
    camera.setPosition(this.x, -190,400);
  }
}