class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerRef=await database.ref('playerCount').once("value");
      if(playerRef.exists()){
        playerCount=playerRef.val();
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprites(300,200);
    car3=createSprites(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4];
  }
  play(){
form.hide();
Player.playerInfo();
if(allPlayers!==undefined){
 // var playerP=130;
 var index=0;
 var x=0;
 var y;
  for(var i in allPlayers){
    index=index+1;
    x=x+200;
    y=displayHeight-allPlayers[i].distance;
    cars[index-1].x=x;
    cars[index-1].y=y;
    if(index===player.index){
      
      cars[index-1].shapeColor=red;
      camera.position.x=displayWidth/2;
      camera.position.y=cars[index-1].y;
    }
   
  
  
  
}
  }
  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=50;
     player.update(); }
}
drawSprites();


}