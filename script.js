//call other files
  var player;
  var gameBackground;

//0 = menu, 1 = cutscene, 2 = level nr.1, etc.
  var gameState = 0; 


function setup() {
  createCanvas (928,600,WEBGL);
  tent = loadImage('picures/tent.png');
  campfire = loadImage('picures/campfire.gif');

  player = new Player();
  gameBackground = new Background();
}

function preload() {

}

function draw(){
  //gameStates
    if(gameState == 0){
      game_phase1();
    }
}

//gameStates
function game_phase1 (){
 //background
    background (0,0,0);
 
  gameBackground.phase_1();
    
  //player
    player.gravity();
    player.draw();
    player.move();
    player.camera();

  //tent
    //rect(-300,0,250,110);  
    image(tent,-300,0,250,110);

  //campfire
    //rect(-35,60,50,50);
    image(campfire,-35,60,50,50);
}