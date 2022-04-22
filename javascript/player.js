//let pictures and camera
  let character_stand_right;
  let character_stand_left;
  let character_run_right;
  let character_run_left;
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
    this.x = 50;
    this.y = 0;
    this.w = 30;
    this.h = 30;
    this.color = [255, 204, 0];       
    

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;

    // jump variables    
    this.maxJumpframes = 20;
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
 
  draw(){    
    fill(this.color)
    rect(this.x, this.y, this.w, this.h);
  }
  camera(){
    camera.setPosition(this.x, -190,400);
  }
}