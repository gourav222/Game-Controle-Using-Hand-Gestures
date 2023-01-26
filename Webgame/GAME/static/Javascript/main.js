//let E1 = new Enemy();
let c1 = 0,c2 = 0,x=1300;

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;

let health_attachment = []

let ground = new Ground();
ground.setProperties();
ground.show();

let sling = new SlingShot();
sling.setSlingShot();
sling.setProperties();
sling.show();

let king = new King();
king.setProperties_King();
king.show();

let king_health = king.get_Health();
let health1 = new health_Bar(350, windowHeight- 140,1000, king_health);
health1.setProperties();
health1.show();

let zombie_health_bar = [];
let zombies = [];
let zombie_health;

let wave2_health_bar = [];
let wave2_mons = [];
let wave2_mons_health;


for(let i = 0; i < 10; i++){
  zombies[i] = new zombie(x);
  zombies[i].setProperties();
  zombie_health = zombies[0].check_Health();
  zombie_health_bar[i] = new health_Bar(x, windowHeight- 120, zombie_health);
  zombie_health_bar[i].setProperties();
  
  x += 100;
}

for(let i = 0; i < 10; i++){
  wave2_mons[i] = new wave2_monster(x);
  wave2_mons[i].setProperties();
  wave2_mons_health = wave2_mons[0].check_Health();
  wave2_health_bar[i] = new health_Bar(x, windowHeight- 120, zombie_health);
  wave2_health_bar[i].setProperties();
  
  x += 100;
}
let frame = 0, frame1 = 0, j = 0, k = 0, flag = true, index;

//
function change(){
  requestAnimationFrame(change);

  sling.checkCollision();
  sling.checkEnemyCollision();
  for(let i = 0; i < 10; i++){
    if(frame1 % 10 === 0){
    zombies[i].update_img(j % 3);
    wave2_mons[i].update_img(j%3);
    }
    if(zombies[i].position_enemy() > 350){
    zombies[i].move();
    } 
    if(wave2_mons[i].position_enemy() > 350)
    {
      wave2_mons[i].move();
    }
    let tmp = zombies[i].position_enemy();
    let tmp2 = wave2_mons[i].position_enemy();
    zombie_health_bar[i].move(tmp);
    wave2_health_bar[i].move(tmp2);

    if(zombies[i].check_Health() <= 0){
      zombies.splice(i,0);
      zombie_health_bar.splice(i,0);
      zombies[i].remove_enemy();
      zombie_health_bar[i].remove_health_Bar();
      if(i === zombies.length-1)
      {
        flag = false;
      }
    }
    
    if(wave2_mons[i].check_Health() <= 0){
      wave2_mons.splice(i,0);
      wave2_health_bar.splice(i,0);
      wave2_mons[i].remove_enemy();
      wave2_health_bar[i].remove_health_Bar();
      if(i === wave2_mons.length-1)
      {
        flag = false;
      }
    }
    if(zombies[i].position_enemy() <= 399){
      health1.update_health(zombies[i].get_Power());
      index = health1.check_health();
      if(flag){
            health1.update_img(index);
      }
    
      zombies[i].update_Health();
      zombie_health_bar[i].update_health(king.get_Power());
      index = zombie_health_bar[i].check_health();
      zombie_health_bar[i].update_img(index);

    }
    if(wave2_mons[i].position_enemy() <= 399){
      health1.update_health(wave2_mons[i].get_Power());
       index = health1.check_health();
       if(flag){
            health1.update_img(index);

      }
      wave2_mons[i].update_Health();
      wave2_health_bar[i].update_health(king.get_Power());
      index = wave2_health_bar[i].check_health();
      wave2_health_bar[i].update_img(index);
      
      
    }

}
j++;
frame1++;
  if( (zombies[0].position_enemy() <= 350  ) || (wave2_mons[0].position_enemy <= 350 ) ){
    if(frame%5 === 0){
      king.update_img(k%5);
      k++;
    }
    frame++;
  }  
}
function animate(){
    requestAnimationFrame(animate); 
    for(let i = 0;i<10;i++){
      if( i % 5 === 0){
          enemies[i].setProperties2(j%20);
          if(i === 5){
          j++;
          }
      }
      
      else if(i % 3 === 0   && i != 0) {
        enemies[i].setProperties3(j1%20)
        
        if(i === 9){
          j1++;
          }
      }
      else   {
        enemies[i].setProperties(j2%20)
        if(i === 8){
          j2++;
          }
      }
      
    enemies[i].move(); 
    if(enemies[i].position_enemy() <= 350){
        health1.update_health(0.1);
        index = health1.check_health();
        health1.update_img(index);
        enemies[i].update_Health();
    }
    if(enemies[i].check_Health() <= 0){
      enemies.splice(i,0);
      enemies[i].remove_enemy();
      if(i === enemies.length-1)
      {
        flag = false;
      }
    }
  

    }
    if(enemies[0].position_enemy() <= 350 && flag){
    if(frame%5 === 0 ){
      king.update_img(k%5);
      k++;
    }
    frame++;
  }

}
for(let i = 0;i<10;i++){
  zombie_health_bar[i].show();
  zombies[i].show(); 
}
for(let i = 0;i<10;i++){  
   wave2_health_bar[i].show();
   wave2_mons[i].show(); 
}
let tower = new Tower();
tower.setProperties();
tower.show();
var ws_url = 'ws://' + window.location.host + '/ws/test/';
var socket = new WebSocket(ws_url);
socket.onopen = function (event){
    console.log("Opening Camera");
}
socket.onclose = function (ev){
    alert('Connection closed');
    cancelAnimationFrame();
    engine.enabled = false;
}
socket.onerror = function (event) {
    alert('An error occured with the camera');
}
let hand = new Hand(0,0);
hand.setProperties();
hand.show();
socket.onmessage = function (event){
    var data = JSON.parse(event.data);
    finger = data.Finger;
    X = data.X;
    Y = data.Y;
    sling.checkCollision();
    console.log();
    if(finger ==='1000') {
        sling.toStatic(false);
        if(sling.allowShoot){
            console.log('Shoot');
            sling.shoot();
        }
        
        hand.move(X, Y);
        var XY = hand.getHandXY();
        sling.dragBall = sling.handOverBall(XY[0], XY[1]);

    }
    else if(finger ==='1100') {

        if(sling.dragBall){
            sling.toStatic(true);
            hand.move(X, Y);
            sling.moveBall(X, Y);
            sling.allowShoot = true;
        }
        console.log("closed");

    }
}
change();
World.add(engine.world, [mouseConstraint, sling]);
Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);