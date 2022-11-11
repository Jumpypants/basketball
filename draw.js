function drawBg(){
  ctx.drawImage(display.bgImage, 0, 0, game.cw, game.ch);
}
function drawPlayers(){
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    ctx.fillStyle = "red";
    ctx.fillRect(p.x - p.w / 2, p.y - p.h / 2, p.w, p.h);
  }
}

function drawBall(){
  for(var i = 0; i < balls.length; i++){
    var b = balls[i];
    ctx.fillStyle = "blue";
    ctx.fillRect(b.x - b.w / 2, b.y - b.h / 2, b.w, b.h);
  }
}

function drawBaskets(){
  for(var i = 0; i < baskets.length; i++){
    var ba = baskets[i];
    ctx.fillStyle = "purple";
    ctx.fillRect(ba.x - ba.w / 2, ba.y - ba.h / 2, ba.w, ba.h);
  }
}

function drawScore(){
  ctx.font = "" + display.scoreFontSize + "px " + display.font;
  ctx.fillStyle = display.scoreCol;

  ctx.fillText(baskets[0].score, display.basketOneScoreXOffset, display.basketOneScoreYOffset);
  ctx.fillText(baskets[1].score, game.cw + display.basketTwoScoreXOffset, display.basketTwoScoreYOffset);
}
