function attack(x, y, w, h, kbx, kby, dir, ap){
  //check players hit
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    if(p === ap){
      continue;
    }
    var playerRect = rect(p.x, p.y, p.w, p.h);
    var punchRect = dir == 1 ?
      rect(x + ap.x + ap.w / 2, y + ap.y - h / 2, w, h) :
      rect(-x + ap.x - ap.w / 2, y + ap.y - h / 2, w, h);
    if(rectOverlap(playerRect, punchRect)){
      p.xVel = kbx * dir;
      p.yVel = kby;
    }
    ctx.fillStyle = "orange";
    ctx.fillRect(punchRect.x - punchRect.w / 2, punchRect.y - punchRect.h / 2, punchRect.w, punchRect.h);
  }
  //check ball hit
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    var ballRect = rect(b.x, b.y, b.w, b.h);
    var punchRect = dir == 1 ?
      rect(x + ap.x + ap.w / 2, y + ap.y - h / 2, w, h) :
      rect(-x + ap.x - ap.w / 2, y + ap.y - h / 2, w, h);
    if(rectOverlap(ballRect, punchRect)){
      b.xVel = kbx * dir;
      b.yVel = kby;
    }
  }
}

function rect(x, y, w, h){
  return {
    x: x,
    y: y,
    w: w,
    h: h
  }
}

function rectOverlap(r1, r2){
  return r1.x + r1.w / 2 > r2.x - r2.w / 2
  && r2.x + r2.w / 2 > r1.x - r1.w /  2
  && r1.y + r1.h / 2 > r2.y - r2.h / 2
  && r2.y + r2.h / 2 > r1.y - r1.h / 2;
}

function bounceBall(){
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    if(b.onFloor){
      b.yVel -= b.bounceVelLost;
      b.yVel = - b.yVel;
      b.onFloor = false;
    }
    var bounce = false;
    while(b.x - b.w / 2 <= 0){
      b.x++;
      bounce = true;
    }
    if(bounce){
      b.xVel = - b.xVel;
    }
    bounce = false;
    while(b.x + b.w / 2 >= game.cw){
      b.x--;
      bounce = true;
    }
    if(bounce){
      b.xVel = - b.xVel;
    }
  }
}

function move(){
  //players
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    p.jumpCd--;
    p.x += p.xVel;
    if(p.onFloor){
      if(p.xVel < 0){
        p.xVel += game.groundFriction;
      } else if(p.xVel > 0){
        p.xVel -= game.groundFriction;
      }
    } else if(p.xVel < 0){
        p.xVel += game.airFriction;
    } else if(p.xVel > 0){
        p.xVel -= game.airFriction;
    }
  }
  //ball
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    b.x += b.xVel;
    if(b.xVel < 0){
      b.xVel += game.airFriction;
    } else if(b.xVel > 0){
      b.xVel -= game.airFriction;
    }
  }
}

function checkFall(){
  //players
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    p.y += p.yVel;
    p.yVel += game.gravity;
    p.onFloor = false;
    while(p.y + p.h / 2 > game.floor){
      p.y--;
      p.jumpsUsed = 0;
      p.onFloor = true;
    }
  }
  //ball
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    b.y += b.yVel;
    b.yVel += game.gravity;
    while(b.y + b.h / 2 > game.floor){
      b.y--;
      b.onFloor = true;
    }
  }
}

function CheckFall(){
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    while(p.y > game.floor){
      p.y--;
      p.jumpsUsed = 0;
    }
  }
}

function checkAttackCd(){
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    switch(p.state){
      case "punch":
        p.cd--;
        if(p.cd <= 0){
          p.punchFunct();
          p.state = "cd";
          p.cd = p.punchAttackCd;
        }
        break;
      case "kick":
        p.cd--;
        if(p.cd <= 0){
          p.kickFunct();
          p.state = "cd";
          p.cd = p.kickAttackCd;
        }
        break;
      case "cd":
        p.cd--;
        if(p.cd <= 0){
          p.state = "idle";
        }
        break;
    }
  }
}

function checkPlayerButtons(){
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    //jump
    if(p.up && p.jumpsUsed < p.maxJumps && p.jumpCd <= 0){
      p.jumpsUsed++;
      p.jumpCd = p.jumpCdMax;
      p.yVel = -p.jumpVel;
    }
    //left
    if(p.left && p.xVel > -p.moveXMax){
      p.xVel -= p.acceleration;
      p.dir = -1;
    }
    //right
    if(p.right && p.xVel < p.moveXMax){
      p.xVel += p.acceleration;
      p.dir = 1;
    }
    //punch
    if(p.punch && !p.up && !p.down && p.state == "idle"){
      p.cd = p.punchPreAttack;
      p.state = "punch";
    }
    //kick
    if(p.kick && !p.up && !p.down && !p.left && !p.right &&p.state == "idle"){
      p.cd = p.kickPreAttack;
      p.state = "kick";
    }
  }
}

function updatePlayerButtons(){
  players[0].up = game.buttons.w;
  players[0].down = game.buttons.s;
  players[0].left = game.buttons.a;
  players[0].right = game.buttons.d;
  players[0].punch = game.buttons.shift;
  players[0].kick = game.buttons.c;

  players[1].up = game.buttons.up;
  players[1].down = game.buttons.down;
  players[1].left = game.buttons.left;
  players[1].right = game.buttons.right;
  players[1].punch = game.buttons.space;
  players[1].kick = game.buttons.m;
}
