class BackgroundMenu {
  
  constructor() {
    this.menucameraX = 450;
  }
  phase_1(){
    //how long are the background pictures
      var imageLength = 2000;

    //layer 1 
      translate(0,0,-50);
      for (var imageLayer1X = -928/2; imageLayer1X < imageLength; imageLayer1X+=layer_10.width) {
        image(layer_10, imageLayer1X,-height-130);
        image(layer_9, imageLayer1X,-height-130);
        image(layer_8, imageLayer1X,-height-130);
      }

    //layer 2
      translate(0,0,25);
      for (var imageLayer2X = -928/2; imageLayer2X < imageLength; imageLayer2X+=layer_7.width) {
        image(layer_7, imageLayer2X,-height-130);
        image(layer_6, imageLayer2X,-height-130);
        image(layer_5, imageLayer2X,-height-130);
      }

    //layer 3
      translate(0,0,24);
      for (var imageLayer3X = -928/2; imageLayer3X < imageLength; imageLayer3X+=layer_4.width) {
        image(layer_4, imageLayer3X,-height-130);
        image(layer_3, imageLayer3X,-height-130);
        image(layer_2, imageLayer3X,-height-130);
      }
    //layer 4
      translate(0,0,1);
      for (var imageLayer5X = -928/2; imageLayer5X < imageLength; imageLayer5X+=layer_1.width) {
        image(layer_1, imageLayer5X,-height-130);
      }
    
    //title
      image(title, this.menucameraX-220,-550, 500, 330);
      image(play, this.menucameraX-120,-220, 225, 65);
      image(options, this.menucameraX-120,-170, 225, 65);
      image(exit, this.menucameraX-120,-120, 225, 65);
  }
  camera(){
    camerax = this.menucameraX;
    this.menucameraX = this.menucameraX +1;
    createcam.setPosition(this.menucameraX, -230,450);

    if(this.menucameraX > 1400){
      this.menucameraX = 450;
    }
    if(gameState ==1){
      this.menucameraX = 0;
    }
  }
}
