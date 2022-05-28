//Important variables:
  var [WIDTH, W, HEIGHT, H] = [1200, 1200, 600, 600];
  var [MOVESPEED, FALLSPEED, JUMPPOWER] = [10,2,-25]
  var alive = true;
//preloading everything:
  function preload() {
  //Menu
    title = loadImage('data/random/menu/title.png');
    exit = loadImage('data/random/menu/exit.png');
    play = loadImage('data/random/menu/play.png');
    options = loadImage('data/random/menu/options.png');
    tent = loadImage('data/random/tent.png');
    campfire = loadImage('data/random/campfire.gif');
    spikes = loadImage('data/random/3-spikes.png');
    deathscreen = loadImage('data/random/menu/deadscreen.png');
    snail_right = loadImage('data/random/snail/snail-right.png');
    snail_left = loadImage('data/random/snail/snail-left.png');
    frog_stand = loadImage('data/random/snail/frog-stand.png');
    frog_jump = loadImage('data/random/snail/frog-jump.gif');
    tree = loadImage('data/map/trunk.png');
    short_island = loadImage('data/map/short_island.png');
    long_island = loadImage('data/map/long_island.png');
    exitscreen = loadImage('data/random/menu/exitscreen.png');
    boss_jump = loadImage('data/random/boss/boss-jump.png');
    boss_stand = loadImage('data/random/boss/boss-stand.png');
    boss_pre_jump = loadImage('data/random/boss/boss-pre-jump.gif');
    
      
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
    sign_go = loadImage('data/random/signs/go-sign.png');

  //Music
    fall = loadSound('data/sound/fall.mp3');
    crickets = loadSound('data/sound/background.mp3');
    music = loadSound('data/sound/music.mp3');
    walking = loadSound('data/sound/running-in-grass.mp3')
    hey = loadSound('data/sound/hey.mp3')
  //video
    //cutscene = createVideo(['data/video/cutscene.mp4']);

  //Player
    character_stand_right = loadImage('data/player/standing_right.gif');
    character_stand_left = loadImage('data/player/standing_left.gif');
    character_run_right = loadImage('data/player/running_right.gif');
    character_run_left = loadImage('data/player/running_left.gif');
    dead_right = loadImage('data/player/dead_right.png');
    dead_left = loadImage('data/player/dead_left.png');

  //Extra
  }