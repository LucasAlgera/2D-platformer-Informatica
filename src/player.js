  let deathTimer = 5;
  let direct = 0;
  let vely = 0;
  let velx = 0;

class Player{

  constructor(options) {

    this.x = 8;
    this.y = -110;
    this.w = 70;
    this.h = 70;    

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;

  }

//Player movement (player.move)
  move(){

    // start with gravity
    this.gravity();
  
    if (keyIsDown(65) && !keyIsDown(68)){
      if(COLLISION != "left"){//&& this.x >= 0)
        velx = -MOVESPEED
      }
    }

    if (keyIsDown(68) && !keyIsDown(65)){
      if(COLLISION != "right"){//&& this.x + this.w < WIDTH)
        velx = MOVESPEED
      }
    }
    
    if (!keyIsDown(68) && !keyIsDown(65) && velx != 0 || keyIsDown(68) && keyIsDown(65) && velx != 0){
      if (velx < 0){
        if ((velx + 4) > 0) {
          velx += (-velx);
        }
        else {
          velx += 4;
        }
      }
      if (velx > 0){
        if ((velx - 4) < 0){
          velx -= (velx);
        }
        else {
          velx -= 4;
        }
      }
    }
    if (COLLISION == "right" || COLLISION == "left") {
      velx = 0;
    }
      
    this.x += velx;

    // spatie
      if(COLLISION == "bottom"){
        vely = 0;
      } else{
        vely += FALLSPEED;
      }
      if (keyIsDown(32) && COLLISION == "bottom") {
        vely += JUMPPOWER;
      }
     
      this.y += vely;
  
    // if (keyIsDown(UP_ARROW)) {
    //   if(COLLISION != "top")
    //     this.y -= MOVESPEED;              
    // }

    // if (keyIsDown(DOWN_ARROW)) {
    //   if(COLLISION != "bottom")
    //     this.y += MOVESPEED;              
    // }


    // EXTRA
      // backspace
      if (keyIsDown(8)) {
        console.log(this)
      }

      if(player.y > (ground.y)){
        //damage(100);
        console.log("map")
      }

      // esc
      if (keyIsDown(27)) {
         noLoop();
      }
    
  }
  
  gravity(){
  }
  
//Drawing the player (player.draw)
  draw(){
      
    //rect(this.x, this.y, this.w, this.h);
    if(playerAlive == 1){
      fall.play();
      music.stop();
      deathTimer = 5;
      gameState = 0;
      playerAlive = 0;
      player.x = 8;      
      player.y = -110;
    }
  
      
    //different pictures for different actions
    if (keyIsDown(68)) {
      direct = 0;
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
      direct = 1;
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
  
//Camera position (player.camera)
  camera(){
    
    createcam.setPosition(this.x, -190,375);
    
  }
  
}