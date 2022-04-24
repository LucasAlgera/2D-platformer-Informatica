class BackgroundMenu {
  
  constructor() {
    let menucamera;
    this.menucameraX = 200;
  }
  phase_1(){
    //how long are the background pictures
      var imageLength = 4000;

    //layer 1 
      translate(0,0,-50);
      for (var layer_10X = -928/2; layer_10X < imageLength; layer_10X+=layer_10.width) {
        image(layer_10, layer_10X,-height-130);
      }
      for (var layer_9X = -928/2; layer_9X < imageLength; layer_9X+=layer_9.width) {
        image(layer_9, layer_9X,-height-130);
      }
      for (var layer_8X = -928/2; layer_8X < imageLength; layer_8X+=layer_8.width) {
        image(layer_8, layer_8X,-height-130);
      }

    //layer 2
      translate(0,0,25);
      for (var layer_7X = -928/2; layer_7X < imageLength; layer_7X+=layer_7.width) {
        image(layer_7, layer_7X,-height-130);
      }
      for (var layer_6X = -928/2; layer_6X < imageLength; layer_6X+=layer_6.width) {
        image(layer_6, layer_6X,-height-130);
      }
      for (var layer_5X = -928/2; layer_5X < imageLength; layer_5X+=layer_5.width) {
        image(layer_5, layer_5X,-height-130);
      }

    //layer 3
      translate(0,0,24);
      for (var layer_4X = -928/2; layer_4X < imageLength; layer_4X+=layer_4.width) {
        image(layer_4, layer_4X,-height-130);
      }
      for (var layer_3X = -928/2; layer_3X < imageLength; layer_3X+=layer_3.width) {
        image(layer_3, layer_3X,-height-130);
      } 
      for (var layer_2X = -928/2; layer_2X < imageLength; layer_2X+=layer_2.width) {
        image(layer_2, layer_2X,-height-130);
      }
    //layer 4
      translate(0,0,0);
      for (var layer_1X = -928/2; layer_1X < imageLength; layer_1X+=layer_1.width) {
        image(layer_1, layer_1X,-height-130);
      }
    
    //title
      image(title, this.menucameraX-220,-550, 500, 330);
      image(play, this.menucameraX-120,-220, 225, 65);
      image(options, this.menucameraX-120,-170, 225, 65);
      image(exit, this.menucameraX-120,-120, 225, 65);
  }
  camera(){
    this.menucameraX = this.menucameraX +1;
    createcam.setPosition(this.menucameraX, -230,450);

    if(this.menucameraX > 3900){
      this.menucameraX = 210;
    }
  }
}

//load in the pictures
  function preload() {
    layer_1 = loadImage('data/background/Layer_0000_9.png');
    layer_2 = loadImage('data/background/Layer_0001_8.png');
    layer_3 = loadImage('data/background/Layer_0002_7.png');
    layer_4 = loadImage('data/background/Layer_0003_6.png');
    layer_5 = loadImage('data/background/Layer_0004_Lights.png');
    layer_6 = loadImage('data/background/Layer_0005_5.png');
    layer_7 = loadImage('data/background/Layer_0006_4.png');
    layer_8 = loadImage('data/background/Layer_0007_Lights.png');
    layer_9 = loadImage('data/background/Layer_0008_3.png');
    layer_10 = loadImage('data/background/Layer_0009_2.png');
    title = loadImage('data/random/menu/title.png');
    exit = loadImage('data/random/menu/exit.png')
    play = loadImage('data/random/menu/play.png')
    options = loadImage('data/random/menu/options.png')
  }
