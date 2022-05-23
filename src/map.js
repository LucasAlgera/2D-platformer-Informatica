class Background {
  
  constructor() {
  }
  
  phase_1(){
    //how long are the background pictures
      var imageLength = 2500;

    //layer 1 
      translate(0,0,-50);
      for (var imageLayer1X = -500; imageLayer1X < imageLength; imageLayer1X+=layer_10.width) {
        image(layer_10, imageLayer1X,-height-130);
        image(layer_9, imageLayer1X,-height-130);
        image(layer_8, imageLayer1X,-height-130);
      }

    //layer 2
      translate(0,0,25);
      for (var imageLayer2X = -500; imageLayer2X < imageLength; imageLayer2X+=layer_7.width) {
        image(layer_7, imageLayer2X,-height-130);
        image(layer_6, imageLayer2X,-height-130);
        image(layer_5, imageLayer2X,-height-130);
      }

    //layer 3
      translate(0,0,24);
      for (var imageLayer3X = -500; imageLayer3X < imageLength; imageLayer3X+=layer_4.width) {
        image(layer_4, imageLayer3X,-height-130);
        image(layer_3, imageLayer3X,-height-130);
        image(layer_2, imageLayer3X,-height-130);
      }
    //layer 4
      translate(0,0,0);
        image(tent,-300,-100,250,110);
        image(campfire,-35,-40,50,50);
    //layer 5
      translate(0,0,1);
      for (var imageLayer5X = -500; imageLayer5X < imageLength; imageLayer5X+=layer_1.width) {
        image(layer_1, imageLayer5X,-height-130);
      }
  }
  
}
//load in the pictures

