  let vely = 0;
  let velx = 0;

class Enemy{
  constructor(options){
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.color = options.color;
    this.vis = options.vis;
    this.move = options.move;
    this.velx = 2;
    this.vely = 0;
    this.moveTo1 = options.moveTo1;
    this.moveTo2 = options.moveTo2;
    this.name = options.name;
    this.lvl = options.lvl;
    this.frogTimer = 3;
    this.jumpTo = options.jumpTo;
    this.jumpFrom = options.jumpFrom;
    
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

   draw(){
    if (this.lvl == gameState || this.lvl == 0){
      if (this.vis){
        fill(this.color);
        strokeWeight(0);
        rect(this.x, this.y, this.w, this.h);
      }
      if(this.name == Names.Snail){
        if(enemyColliding == "3" && (DAMAGE == "bottom" || DAMAGE == "top" || DAMAGE == "right" || DAMAGE == "left")){
          die();
        }
      }
      
    //SNAIL
      if(this.move && alive){
        this.x = this.x + this.velx;
        if(this.x <= this.moveTo1){
          this.velx = 2;
        }
        if(this.x + this.w >= this.moveTo2){
          this.velx = -2;
        }
        if(this.velx == -2){
          image(snail_right, this.x, this.y, this.w, this.h);
        } else if(this.velx == 2){
          image(snail_left, this.x, this.y, this.w, this.h);
        }
      }

    //FROG
      if(!this.move && alive){
        if (frameCount % 60 == 0 && this.frogTimer > 0) {
          this.frogTimer --;
        }

        this.y += this.vely;
        this.vely = 0;

        if(this.frogTimer < 2){
          image(frog_jump, this.x, this.y, this.w, this.h);
        }else{
          image(frog_stand, this.x, this.y, this.w, this.h);
        }
        if(this.y > this.jumpTo && this.frogTimer == 0){
          this.vely += -10;
        } 
        if(this.y <= this.jumpTo){
          this.frogTimer = 4;
        }
        if(this.frogTimer > 0 && this.y < this.jumpFrom){
          this.vely += 3;
        }
      }
    }
  }
}