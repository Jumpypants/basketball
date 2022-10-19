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
    this.jumpVel = 20;
    this.jumpCdMax = 15;
    this.jumpCd = 0;

    this.acceleration = 4;
    this.moveXMax = 12;

    this.cd = 0;
    this.state = "idle";

    this.punchPreAttack = 10;
    this.punchAttackCd = 10;

    this.kickPreAttack = 30;
    this.kickAttackCd = 40;
  }
  punchFunct(){
    attack(30, -30, 90, 50, 20, -10, this.dir, this);
  }
  kickFunct(){
    attack(30, 30, 90, 50, 30, -15, this.dir, this);
  }
};

var players = [new player(1), new player(-1)];

var display = {
  bgImage: document.getElementById("image"),
};

var fps = 60;
