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
  var vely = 0;
  var velx = 0;
  var jumpPower = -25;
  var num = 0;

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
  
    if (keyIsDown(65) && !keyIsDown(68)){
      if(COLLISION != "left" && COLLISION == "bottom")//&& this.x >= 0)
        if (velx > -MOVESPEED){
          velx -= 1;
        }
    }

    if (keyIsDown(68) && !keyIsDown(65)){
      if(COLLISION != "right" && COLLISION == "bottom")//&& this.x + this.w < WIDTH)
        if (velx < MOVESPEED){
          velx += 1;
        }
    }
    if (!keyIsDown(68) && !keyIsDown(65) && velx != 0 || keyIsDown(68) && keyIsDown(65) && velx != 0){
      if (velx < 0){
        if ((velx + 4) > 0) {
          console.log(velx + 4);
          velx += (-velx);
        }
        else {
          velx += 1;
        }
      }
      if (velx > 0){
        if ((velx - 4) < 0){
          console.log(velx - 4);
          velx -= (velx);
        }
        else {
          velx -= 1;
        }
      }
    }
    if (COLLISION == "right" || COLLISION == "left") {
      velx = 0;
    }
      
    this.x += velx;

    // spatie
      if (keyIsDown(32) && COLLISION == "bottom") {
        vely += jumpPower;
      } 
  
    // if (keyIsDown(UP_ARROW)) {
    //   if(COLLISION != "top")
    //     this.y -= MOVESPEED;              
    // }

    // if (keyIsDown(DOWN_ARROW)) {
    //   if(COLLISION != "bottom")
    //     this.y += MOVESPEED;              
    // }

    // backspace
    if (keyIsDown(8)) {
      console.log(this)
    }

    if(num == 5){
      player.x = 30;
      player.y = -110;
      num = 0;
      velx = 0;
    }
    if(player.y > (ground.y + 20)){
      num += 1;
      player.x -= 50 * num; 
      player.y = -200;
      vely = 0;
      velx = 0;
    }

  // esc
    if (keyIsDown(27)) {
      //throw new Error("You want to exit huh?");
      fail;
    }
  }

  gravity(){
    if(COLLISION != "bottom"){
      this.y += vely
      vely += FALLSPEED
    }
    if(COLLISION == "bottom"){
      vely = 0;
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