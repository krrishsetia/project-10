var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var compScore = 0;
var playerScore = 0;
var gameState ="start";

var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";




var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

 





function draw() {
  
background("green");
textSize(18);
fill("maroon");
text(compScore,25,225);
text(playerScore,25, 185);
  
 if (gameState=="start") {
   fill("maroon");
   text("press space to start", 125, 190);
    if (keyDown("space")) {
    serve();
    gameState="play"; 
  } 
  }
  if(gameState=="shoot"){
    if (playerScore==5||compScore==5) {
  gameState="end"}
    if (keyDown("space")) {
    serve();
    gameState="play";} 
   }
if (gameState=="play") {
  if (goal1.isTouching(striker) || goal2.isTouching(striker))
  {gameState="shoot";}
  paddleMovement();
  computerMallet.x = striker.x;}
  
          
  if (gameState=="end") {
    striker.velocityX=0;
    striker.velocityY=0;
    fill("maroon");
  textSize(18);
  text("Game Over!",170,160);
  }
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  
  var Edges = createEdgeSprites();

  
  striker.bounceOff(Edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(Edges);
  computerMallet.bounceOff(Edges);
  if (striker.isTouching(goal1)) {
    compScore = compScore + 1;
    striker.x=200;
    striker.y=200;
    striker.velocityX=0;
    striker.velocityY=0;
  }
  if (striker.isTouching(goal2)) {
    playerScore = playerScore + 1;
    striker.x=200;
    striker.y=200;
    striker.velocityX=0;
    striker.velocityY=0;
  }

 
  
  
  
  
 
  drawSprites();
}






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
