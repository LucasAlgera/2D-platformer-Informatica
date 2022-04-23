//let pictures and camera
  let character_stand_right;
  let character_stand_left;
  let character_run_right;
  let character_run_left;
  let dead_right;
  let dead_left;
  let createcam;

//set class variables
  var direct = 0;
  var velocity = 0;
  var jumpPower = -20;
  var fallingSpeed = 2;
  var num = 0;
  var active = true;


class Player{

  constructor() {
    createcam = createCamera();
    character_stand_right = loadImage('data/player/standing_right.gif');
    character_stand_left = loadImage('data/player/standing_left.gif');
    character_run_right = loadImage('data/player/running_right.gif');
    character_run_left = loadImage('data/player/running_left.gif');
    dead_right = loadImage('data/player/dead_right.png');
    dead_left = loadImage('data/player/dead_left.png');
    
    this.x = 30;
    this.y = -110;
    this.w = 80;
    this.h = 80;    
    

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;

  }

  move(){

    // start with gravity
    this.gravity();
  
    if (keyIsDown(65)){
      if(COLLISION != "left" )//&& this.x >= 0)
        this.x -= MOVESPEED;
    }

    if (keyIsDown(68)) {
      if(COLLISION != "right" )//&& this.x + this.w < WIDTH)
        this.x += MOVESPEED;              
    }
  // backspace
    if (keyIsDown(8)) {
      console.log(this)
    }

  // enter
    if (keyIsDown(13)) {
      music.loop();
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
    if (keyIsDown(32) && COLLISION == "bottom") {
      velocity += jumpPower;
    }
   
  }

  gravity(){
    if(COLLISION != "bottom" && active){
      this.y += velocity
      velocity += fallingSpeed
    }
    if(COLLISION == "bottom"){
      velocity = 0;
    }
    if(num == 5){
      player.x = 30;
      player.y = -110;
      num = 0;
    }
    if(player.y > (ground.y + 20)){
      num += 1;
      player.x -= 30 * num; 
      player.y = -200;
      velocity = 0;
    }
  }
 
  //draw player
    draw(){
      //rect(this.x, this.y, this.w, this.h);
      
    //direction the player is facing
      if (keyIsDown(68)) {
        direct = 0;
      }
      if (keyIsDown(65)) {
        direct = 1;
      }
  
      
    //different pictures for different actions
      if (keyIsDown(68) && direct == 0) {
        image(character_run_right, this.x, this.y, this.w, this.h);
      } else if (keyIsDown(17) && direct == 0) {
        image(dead_right, this.x, this.y, this.w, this.h);
        fall.play();
      } else{
        if(direct == 0){
          image(character_stand_right, this.x, this.y, this.w, this.h);
        }
      }
  
      if (keyIsDown(65)) {
        image(character_run_left, this.x, this.y, this.w, this.h);
      } else if (keyIsDown(17) && direct == 1) {
        image(dead_left, this.x, this.y, this.w, this.h);
        fall.play();
      } else{
        if(direct == 1){
          image(character_stand_left, this.x, this.y, this.w, this.h);
        }
      }
    }
  camera(){
    createcam.setPosition(this.x, -190,400);
  }
}