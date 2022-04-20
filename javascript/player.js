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
  var minHeight = 0;
  var maxHeight = 300;
  var jumpPower = 15;
  var fallingSpeed = 9;
  var jumping = false;
  var jumpCounter = 0;

class Player {
  constructor() {
    //load in pictures
      camera = createCamera();
      character_stand_right = loadImage('picures/standing_right.gif');
      character_stand_left = loadImage('picures/standing_left.gif');
      character_run_right = loadImage('picures/running_right.gif');
      character_run_left = loadImage('picures/running_left.gif');
    //set player coordinates
      this.x = 20;
      this.y = 0;
      this.w = 100;
      this.h = 100;
  }

  //gravity
    gravity(){
      if (this.y >= minHeight && jumping == false){
        this.x = this.x
        jumpCounter = 0;
      } else{
        this.y = this.y + (direction*velocity)
      }
    }
  //player movement
    move(){
    //run
      if (keyIsDown(LEFT_ARROW)){
          this.x -= 5;
      }
      if (keyIsDown(RIGHT_ARROW)) {
          this.x += 5;  
        }
      
    //jump
      if (keyIsDown(UP_ARROW)){
        jumping = true;
      } else{
        jumping = false;
      }
      if(jumping == true){
        if(jumpCounter >= jumpPower){
          if(this.y >= minHeight){
            this.y = minHeight; 
          } else{
            velocity = fallingSpeed;
          }
        }else{
          velocity = -jumpPower;
          jumpCounter++;
        }
      } else{
        velocity = fallingSpeed;
      }
    }
  //draw player
    draw(){
      //rect(this.x, this.y, this.w, this.h);
      
    //direction the player is facing
      if (keyIsDown(RIGHT_ARROW)) {
        value = 0;
      }
      if (keyIsDown(LEFT_ARROW)) {
        value = 1;
      }
  
      
    //different pictures for different actions
      if (keyIsDown(RIGHT_ARROW) && value == 0) {
        image(character_run_right, this.x, this.y, this.w, this.h);
      } else{
        if(value == 0){
          image(character_stand_right, this.x, this.y, this.w, this.h);
        }
      }
  
      if (keyIsDown(LEFT_ARROW)) {
        image(character_run_left, this.x, this.y, this.w, this.h);
      } else{
        if(value == 1){
          image(character_stand_left, this.x, this.y, this.w, this.h);
        }
      }
    }

  //player camera
    camera(){
      camera.setPosition(this.x, -110,400);
    }
}