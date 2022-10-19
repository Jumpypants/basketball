function drawBg(){
  ctx.drawImage(display.bgImage, 0, 0, game.cw, game.ch);
}
function drawPlayers(){
  for(var i = 0; i < players.length; i++){
    ctx.fillStyle = "red";
    var p = players[i];
    ctx.fillRect(p.x - p.w / 2, p.y - p.h / 2, p.w, p.h);
  }
}
