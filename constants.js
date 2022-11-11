var constants = {
  basketRimWidth: 2,
  basketScoreRectWOffset: 110,
  basketScoreRectYOffset: 5,

  scoreTimer: 80,

  player1X: game.cw / 2 - 200,
  player1Y: 100,
  player1Dir: 1,
  player2X: game.cw / 2 + 200,
  player2Y: 100,
  player2Dir: -1,
  ballX: game.cw / 2,
  ballY: 100
};

class player {
  constructor(dir, x, y) {
    this.w = 80;
    this.h = 120;
    this.x = x;
    this.y = y;
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

    this.spikePreAttack = 3;
    this.spikeAttackCd = 40;
  }
  punchFunct(){
    attack(0, -10, 90, 50, 20, -10, this.dir, this);
  }
  kickFunct(){
    attack(10, 40, 100, 50, 30, -30, this.dir, this);
  }

  spikeButtonFunct(){
    this.yVel = 30;
  }
  spikeFunct(){
    attack(0, 80, 100, 50, 15, 40, this.dir, this);
  }
}

class ball {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 60;

    this.xVel = 0;
    this.yVel = 0;

    this.onFloor = false;
    //this.rimCollision = false;

    this.floorBounceVelLost = 7;
    this.wallBounceVelLost = 7;
    this.objectBounceVelLost = 3;
  }
}

class basket {
  constructor(x, y, dir){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 70;

    this.dir = dir;

    this.score = 0;
  }
}

var players = [new player(constants.player1Dir, constants.player1X, constants.player1Y), new player(constants.player2Dir, constants.player2X, constants.player2Y)];

var balls = [new ball(constants.ballX, constants.ballY)];

var baskets = [new basket(50, 300, 1), new basket(game.cw -50, 300, -1)];

var display = {
  font: "Arial",

  bgImage: document.getElementById("image"),

  //score
  scoreFontSize: 40,
  scoreCol: "white",

  basketOneScoreXOffset: 30,
  basketOneScoreYOffset: 60,
  basketTwoScoreXOffset: -50,
  basketTwoScoreYOffset: 60,
};

var fps = 30;
