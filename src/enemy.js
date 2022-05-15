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
    this.moveTo1 = options.moveTo1;
    this.moveTo2 = options.moveTo2;
    this.name = options.name;
    
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

  draw(){
    if (this.vis){
      fill(this.color);
      strokeWeight(0);
      rect(this.x, this.y, this.w, this.h);
    }
    if(this.name == Names.Snail){
      if(enemyColliding == "3" && (DAMAGE == "bottom" || DAMAGE == "top" || DAMAGE == "right" || DAMAGE == "left")){
        playerAlive = 1;
      }
    }
    if(this.move){
      
      this.x = this.x + this.velx;
      if(this.x <= this.moveTo1){
        this.velx = 2;
      }
      if(this.x + this.w >= this.moveTo2){
        this.velx = -2;
      }       
      
      if(this.velx == -2){
        image(snail_right, this.x, this.y, this.w, this.h);
      }
      if(this.velx == 2){
        image(snail_left, this.x, this.y, this.w, this.h);
      }
    }
  }
}