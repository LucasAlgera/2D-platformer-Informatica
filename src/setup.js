//Important variables:
  var [WIDTH, HEIGHT] = [1200, 600];
  var [MOVESPEED, FALLSPEED] = [10,2]

//preloading everything in the pictures:
  function preload() {
    title = loadImage('data/random/menu/title.png');
    exit = loadImage('data/random/menu/exit.png');
    play = loadImage('data/random/menu/play.png');
    options = loadImage('data/random/menu/options.png');
    tent = loadImage('data/random/tent.png');
    campfire = loadImage('data/random/campfire.gif');

  //Forest layers
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
    
  //Signs in levels
    sign_1 = loadImage('data/random/signs/1-sign.png');
    sign_2 = loadImage('data/random/signs/2-sign.png');
    sign_3 = loadImage('data/random/signs/3-sign.png');
    sign_4 = loadImage('data/random/signs/4-sign.png');
    sign_5 = loadImage('data/random/signs/5-sign.png');
    sign_6 = loadImage('data/random/signs/6-sign.png');
    sign_7 = loadImage('data/random/signs/7-sign.png');
    sign_8 = loadImage('data/random/signs/8-sign.png');
    sign_9 = loadImage('data/random/signs/9-sign.png');
    sign_10 = loadImage('data/random/signs/10-sign.png');
    sign_12 = loadImage('data/random/signs/11-sign.png');
    fall = loadSound('data/sound/fall.mp3');
    music = loadSound('data/sound/background.mp3');
  }