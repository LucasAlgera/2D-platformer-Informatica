class Block{

  constructor(options){
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.color = options.color;
    this.vis = options.vis;
    this.imglink = options.imglink;
    
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

  draw(){
    if (this.vis){
      fill(this.color);
      strokeWeight(0);
      rect(this.x, this.y, this.w, this.h);
    }
    //image(tent, this.x, this.y, this.w, this.h);
  }
}