function onClick(event){

}

function updateMouse(event){
  game.mouseX = event.mouseX;
  game.mouseY = event.mouseY;
}

function keyDown(evt) {
    switch (evt.keyCode) {
      case 37:
        game.buttons.left = true;
        break;
      case 38:
       	game.buttons.up = true;
        break;
      case 39:
        game.buttons.right = true;
        break;
      case 40:
        game.buttons.down = true;
        break;
      case 32:
        game.buttons.space = true;
        break;
      case 67:
        game.buttons.c = true;
        break;


      case 87:
        game.buttons.w = true;
        break;
      case 65:
       	game.buttons.a = true;
        break;
      case 83:
        game.buttons.s = true;
        break;
      case 68:
        game.buttons.d = true;
        break;
      case 16:
        game.buttons.shift = true;
        break;
      case 77:
        game.buttons.m = true;
        break;
    }
  }

  function keyUp(evt) {
    switch (evt.keyCode) {
      case 37:
        game.buttons.left = false;
        break;
      case 38:
       	game.buttons.up = false;
        break;
      case 39:
        game.buttons.right = false;
        break;
      case 40:
        game.buttons.down = false;
        break;
      case 32:
        game.buttons.space = false;
        break;
      case 67:
        game.buttons.c = false;
        break;


      case 87:
        game.buttons.w = false;
        break;
      case 65:
       	game.buttons.a = false;
        break;
      case 83:
        game.buttons.s = false;
        break;
      case 68:
        game.buttons.d = false;
        break;
      case 16:
        game.buttons.shift = false;
        break;
      case 77:
        game.buttons.m = false;
        break;
    }
  }
