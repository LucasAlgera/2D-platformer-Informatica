//call other files
  var player;
  var gameBackground;
  let fr = 6000;

//0 = menu, 1 = cutscene, 2 = level nr.1, etc.
  var gameState = 0; 

function setup() {
  createCanvas (928,600,WEBGL);
  frameRate(fr)
  

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


}