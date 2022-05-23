class Block{
  
  constructor(options){
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.color = options.color;
    this.vis = options.vis;
    this.name = options.name;
    this.lvl = options.lvl;
    
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

  draw(){
    if (this.lvl == gameState || this.lvl == 0){
      if(this.name == Names.Platform){
        image(tree, this.x-15, this.y-5, this.w+30, this.h+30);
      }

      if (this.vis){
        fill(this.color);
        strokeWeight(0);
        rect(this.x, this.y, this.w, this.h);
      }
      if(this.lvl == gameState){
        if(this.name == Names.Spike){
          image(spikes, this.x, this.y, this.w, this.h)
          if(bcolliding == "2" && COLLISION == "bottom"){
            die();
          }
        }
      }
    }
  }
}