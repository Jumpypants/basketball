var constants = {
  basketRimWidth: 2
};

class player {
  constructor(dir) {
    this.w = 80;
    this.h = 120;
    this.x = game.cw / 2;
    this.y = 100;
    this.dir = dir;

    this.xVel = 0;
    this.yVel = 0;

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.punch = false;
    this.kick = false;

    this.maxJumps = 2;
    this.jumpsUsed = 0;
    this.jumpVel = 25;
    this.jumpCdMax = 15;
    this.jumpCd = 0;

    this.acceleration = 4;
    this.moveXMax = 12;

    this.cd = 0;
    this.state = "idle";
    this.onFloor = false;

    this.punchPreAttack = 0;
    this.punchAttackCd = 8;

    this.kickPreAttack = 0;
    this.kickAttackCd = 40;
  }
  punchFunct(){
    attack(0, -10, 90, 50, 20, -10, this.dir, this);
  }
  kickFunct(){
    attack(10, 40, 100, 50, 30, -30, this.dir, this);
  }
}

class ball {
  constructor(){
    this.x = game.cw / 2;
    this.y = 100;
    this.w = 60;
    this.h = 60;

    this.xVel = 0;
    this.yVel = 0;

    this.onFloor = false;
    this.floorBounceVelLost = 7;
    this.wallBounceVelLost = 7;
    this.rimBounceVelLost = 3;
  }
}

class basket {
  constructor(x, y, dir){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 70;

    this.dir = dir;
  }
}

var players = [new player(1), new player(-1)];

var balls = [new ball()];

var baskets = [new basket(50, 300, 1), new basket(game.cw -50, 300, -1)];

var display = {
  bgImage: document.getElementById("image"),
};

var fps = 30;
