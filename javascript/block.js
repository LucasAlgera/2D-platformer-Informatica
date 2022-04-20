class Block{
  
  constructor(options){
    this.x = options.x;
    this.y = options.y;
    this.w = options.w;
    this.h = options.h;
    this.color = options.color;
    
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

  draw(){
    fill(this.color)
  }
}